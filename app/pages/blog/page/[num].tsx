import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import { Date } from '@/components/Date';
import { Pagination } from '@/components/Pagination';
import Layout from '@/components/Layout';
import { blog } from '@/interfaces/index';
import blogStyles from '@/styles/components/BlogList.module.scss';
import { PER_PAGE } from '@/settings/index';
import allBlogData from '@/data/allBlogData.json';

export default function BlogPageId({ blogData, totalCount}: {
  blogData: blog[],
  totalCount: number,
}) {
  return (
    <Layout>
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
      <Pagination type='blog' totalCount={totalCount} />
    </Layout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(allBlogData.length / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  return { paths, fallback: false };
};

// データ取得
export const getStaticProps = async (context: {params:{num:number}}) => {
  // ページネーション分割後に表示するブログデータを抽出
  const num = context.params.num;
  const startPos = (num - 1) * PER_PAGE;

  // /dataのjsonファイルを参照
  const filePath = path.join(process.cwd(),'data', 'allBlogData.json');
  const blogJson = fs.readFileSync(filePath, 'utf8');
  const blogData = JSON.parse(blogJson) as blog[];

  const data = blogData.slice(startPos, startPos + PER_PAGE);
  
  return {
    props: {
      blogData: data,
      totalCount: blogData.length,
    }
  }
}