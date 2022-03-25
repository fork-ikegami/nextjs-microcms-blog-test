import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import { Date } from '@/components/Date';
import { Pagination } from '@/components/Pagination';
import Layout from '@/components/Layout';
import blogStyles from '@/styles/components/BlogList.module.scss';
import { blog, tag } from '@/interfaces/index';
import { PER_PAGE } from '@/settings/index';
import allBlogData from '@/data/allBlogData.json';
import allTagData from '@/data/allTagData.json';

export default function BlogPageId({ blogData, totalCount, tagName }: {
  blogData: blog[],
  totalCount: number,
  tagName: string,
}) {
  if (blogData.length === 0) {
    return <div>このタグには記事がありません。</div>
  }
  return (
    <Layout>
      <h1 className={blogStyles.blogListTitle}>{tagName}</h1>
      <ul className={blogStyles.blogList}>
        {blogData.map(blog => (
          <li key={blog.id} className={blogStyles.blogItem}>
            <div className={blogStyles.blogText}>
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <h1 className={blogStyles.title}>{blog.title}</h1>
                </a>
              </Link>
              <div>
                <Date dateString={blog.publishedAt} />
                <Link href={`/category/${blog.category.id}/page/1/`}>
                  <a>
                  <span className={blogStyles.category}>{blog.category.name}</span>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination type='tag' totalCount={totalCount} title={tagName} />
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  
  // 各タグの記事をページネーションの件数で絞り込む
  let paths:string[] = [];
  allTagData.forEach((content:tag) => {
    const thisTagBlogs = [];
    allBlogData.forEach((blog:blog) => {
      blog.tag.forEach((tag) => {
        if(tag.id === content.id) {
          thisTagBlogs.push(blog);
        }
      })
    });

    range(1, Math.ceil(thisTagBlogs.length / PER_PAGE)).forEach((repo) => {
      paths.push(`/tag/${content.id}/page/${repo}/`);
    })
  });

  return { paths, fallback: false };
};

// データ取得
export const getStaticProps = async (context: {params:{id:string, num:number}}) => {
  const id = context.params.id;
  const num = context.params.num;
  const startPos = (num - 1) * PER_PAGE;

  // /dataのjsonファイルを参照
  const filePath = path.join(process.cwd(),'data', 'allBlogData.json');
  const blogJson = fs.readFileSync(filePath, 'utf8');
  const blogData = JSON.parse(blogJson) as blog[];

  // ブログデータをタグで絞り込み
  let currentTagBlogData = new Array;
  blogData.forEach((blog) => {
    blog.tag.forEach((tag) => {
      if(tag.id === id) {
        currentTagBlogData.push(blog);
      }
    })
  });

  // ページネーション分割後に表示するブログデータ
  const displayData = currentTagBlogData.slice(startPos, startPos + PER_PAGE);

  // 現在のタグ名
  const currentTag = allTagData.find((tag) => tag.id === id) || { name: '' };
  
  return {
    props: {
      blogData: displayData,
      totalCount: currentTagBlogData.length,
      tagName: currentTag.name,
    }
  }
}