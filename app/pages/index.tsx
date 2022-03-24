import { useContext } from 'react';
import Link from 'next/link';
import { microCMS } from '@/libs/context';
import { Date } from '@/components/Date';
import Layout from '@/components/Layout';
import { PER_PAGE } from '@/settings/index';
import blogStyles from '@/styles/components/BlogList.module.scss';
import styles from '@/styles/Top.module.scss';

export default function Home() {
  const allData = useContext(microCMS);
  const allBlogData = allData.allBlogData;
  allBlogData.splice(PER_PAGE);

  return (
    <Layout home>
      <ul className={blogStyles.blogList}>
        {allBlogData.map((blog) => (
          <li key={blog.id} className={`${styles.blogItem} ${blogStyles.blogItem}`}>
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
      {/* <div className='g-button'>
        <Link href='/blog/page/2/'>
          <a>もっと読む</a>
        </Link>
      </div> */}
    </Layout>
  );
}