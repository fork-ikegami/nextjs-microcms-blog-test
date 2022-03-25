import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { microCMS } from '@/libs/context';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteTitle } from '@/settings/index';
import styles from '@/styles/components/Layout.module.scss';

export default function Layout({ children, home = false } :{
  children: Object,
  home?: boolean
}) {
  // contextから取得
  const allData = useContext(microCMS);
  const allCategoryData = allData.allCategoryData;
  const allTagData = allData.allTagData;

  // カテゴリー一覧
  function createCategoryNav() {
    const items: Object[] = [];
    if(allCategoryData.length >= 1) {
      allCategoryData.forEach((category) => {
        items.push(
          <li key={category.id}>
            <Link href={`/category/${category.id}/page/1/`}>
              <a>
                {category.name}
                <span className={styles.categoryCount}>{category.count}</span>
              </a>
            </Link>
          </li>
        )
      })
    }
    return items;
  };

  // タグ一覧
  function createTagNav() {
    const items: Object[] = [];
    if(allTagData.length >= 1) {
      allTagData.forEach((tag) => (
        items.push(
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}/page/1/`}>
              <a>#{tag.name}</a>
            </Link>
          </li>
        )
      ))
    }
    return items;
  };
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0'/>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>
      <div className={styles.flexWrap}>
        <div className={styles.flexSet}>
          <Header home={home} />
          <div className={styles.col2}>
            <main className={styles.left}>{children}</main>

            <nav className={`${styles.right} ${styles.nav}`}>
              <dl>
                <dt>Categories</dt>
                <dd>
                  <ul className={styles.categoryList}>
                    {createCategoryNav()}
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>Tags</dt>
                <dd>
                  <ul className={styles.tagList}>
                    {createTagNav()}
                  </ul>
                </dd>
              </dl>
            </nav>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
};