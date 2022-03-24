import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import { Date } from '@/components/Date';
import { Pagination } from '@/components/Pagination';
import Layout from '@/components/Layout';
import blogStyles from '@/styles/components/BlogList.module.scss';
import { blog, category } from '@/interfaces/index';
import { PER_PAGE } from '@/settings/index';
import allBlogData from '@/data/allBlogData.json';
import allCategoryData from '@/data/allCategoryData.json';

export default function BlogPageId({ blogData, totalCount } : {
  blogData: blog[],
  totalCount: number,
}) {
  if (blogData.length === 0) {
    return <div>このカテゴリーには記事がありません。</div>
  }
  const categoryName = blogData[0].category.name;
  return (
    <Layout>
      <h1 className={blogStyles.blogListTitle}>{categoryName}</h1>
      <ul className={blogStyles.blogList}>
        {blogData.map(blog => (
          <li key={blog.id} className={blogStyles.blogItem}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <div className={blogStyles.blogText}>
                  <h1 className={blogStyles.title}>{blog.title}</h1>
                  <Date dateString={blog.publishedAt} />
                  <span className={blogStyles.category}>{blog.category.name}</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination type='category' totalCount={totalCount} title={blogData[0].category.name} />
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  
  // 各カテゴリの記事をページネーションの件数で絞り込む
  let paths:string[] = [];
  allCategoryData.forEach((content:category) => {
    const blogCount = allBlogData.filter((blog:blog) => blog.category.id === content.id).length;
    range(1, Math.ceil(blogCount / PER_PAGE)).forEach((repo) => {
      paths.push(`/category/${content.id}/page/${repo}`);
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

  // ブログデータをカテゴリで絞り込み
  const currentCategoryBlogData = blogData.filter((blog) => blog.category.id === id);

  // ページネーション分割後に表示するブログデータ
  const displayData = currentCategoryBlogData.slice(startPos, startPos + PER_PAGE);
  
  return {
    props: {
      blogData: displayData,
      totalCount: currentCategoryBlogData.length,
    }
  }
}