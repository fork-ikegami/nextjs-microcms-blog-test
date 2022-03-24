import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/components/Pagination.module.scss';
import { PER_PAGE, siteTitle } from '@/settings/index';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';

export const Pagination = ({ type, totalCount, title }: { type:string, totalCount:number, title?:string}) => {
  // ページネーションを何ページ分用意するか計算
  const range = (start:number, end:number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const totalPage = range(1, Math.ceil(totalCount / PER_PAGE)).length;

  // 現在のページ番号
  const router = useRouter();
  const currentPage = parseInt(router.query.num as string, 10);

  // パス設定 /ページの種類/あればid/page/番号/
  const path = (router.query.id ? `/${type}/${router.query.id}/page/` : `/${type}/page/`);

  // ページネーション生成
  function pagination() {
    const displayPages = [];
    const items = [];

    // 表示する件数（省略分を削る）
    for (let i = 1; i <= totalPage; i++) {
      if (
        i == 1 ||
        i == totalPage ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        displayPages.push(i);
      }
    }

    if (currentPage > 2) {
      // 一番前へ
      items.push(
        <li key='front' className={`${styles.item} ${styles.arrow} ${styles.arrowDouble}`}>
          <Link href={ `${path}1` }>
            <a className={styles.link}>
              <GrPrevious />
              <GrPrevious />
            </a>
          </Link>
        </li>
      )
    }
    if (currentPage > 1) {
      // 前へ
      items.push(
        <li key='previous' className={`${styles.item} ${styles.arrow}`}>
          <Link href={ `${path}${currentPage-1}` }>
            <a className={styles.link}>
              <GrPrevious />
            </a>
          </Link>
        </li>
      )
    }

    // 1つ前のページ数を保持しておく
    let previousPage;

    for (const page of displayPages) {
      if (previousPage) {
        // TODO: ページ増えたら崩れそう 見直す
        if (page - previousPage === 2) {
          // 前後２ページは表示
          items.push(
            <li key={previousPage + 1} className={styles.item}>
              <Link href={ `${path}${previousPage + 1}` }>
                <a className={styles.link}>{previousPage + 1}</a>
              </Link>
            </li>
          );
        } else if (page - previousPage > 2) {
          // 省略
          items.push(
            <li key={previousPage + 1} className={styles.item}>
              <BsThreeDots />
            </li>
          );
        }
      }
      if (page === currentPage) {
        // カレント表示
        items.push(
          <li key={page} className={styles.item}>
            <span className={styles.current}>{page}</span>
          </li>
        );
      } else {
        // 通常表示
        items.push(
          <li key={page} className={styles.item}>
            <Link href={ `${path}${page}` }>
              <a className={styles.link}>{page}</a>
            </Link>
          </li>
        );
      }
      previousPage = page;
    }

    if (currentPage < totalPage) {
      // 後へ
      items.push(
        <li key='next' className={`${styles.item} ${styles.arrow}`}>
          <Link href={ `${path}${currentPage+1}` }>
            <a className={styles.link}>
              <GrNext />
            </a>
          </Link>
        </li>
      )
    }
    // いちばん後へ
    if (currentPage < totalPage-1) {
      items.push(
        <li key='end' className={`${styles.item} ${styles.arrow} ${styles.arrowDouble}`}>
          <Link href={ `${path}${totalPage}` }>
            <a className={styles.link}>
              <GrNext />
              <GrNext />
            </a>
          </Link>
        </li>
      )
    }

    return items;
  }

  return (
    <>
      <Head>
        <title>{title} 記事一覧｜{siteTitle}</title>
      </Head>
      <ul className={styles.list}>
        {pagination()}
      </ul>
    </>
  );
};