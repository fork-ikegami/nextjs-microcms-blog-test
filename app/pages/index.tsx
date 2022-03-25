import { useContext } from 'react';
import Link from 'next/link';
import { microCMS } from '@/libs/context';
import { Date } from '@/components/Date';
import Layout from '@/components/Layout';
import { PER_PAGE } from '@/settings/index';
import blogStyles from '@/styles/components/BlogList.module.scss';

export default function Home() {
  const allData = useContext(microCMS);
  const allBlogData = allData.allBlogData;
  allBlogData.splice(PER_PAGE);

  return (
    <Layout home>
      <ul className={blogStyles.blogList}>
        {allBlogData.map((blog) => (
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
      <div className='g-button'>
        <Link href='/blog/page/2/'>
          <a>もっと読む</a>
        </Link>
      </div>
    </Layout>
  );
}