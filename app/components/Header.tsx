import Link from 'next/link';
import styles from '@/styles/components/Header.module.scss';
import { siteTitle } from '@/settings/index';
import { ThemeToggle } from '@/components/ThemeToggle';
import logo from '@/public/images/logo.png';

export const Header =({ home }: { home: boolean }) => {
  return (
    <>
      {home ? (
        <header id="globalHeader" className={`${styles.header} ${styles.headerIsHome}`}>
          <h1 className={styles.title}>
            <img
              src={logo.src}
              alt=""
              className={styles.logo}
            />
            {siteTitle}
          </h1>
          <ThemeToggle />
        </header>
      ) : (
        <header id="globalHeader" className={styles.header}>
          <Link href="/">
            <a className={styles.link}>
              <img
                src={logo.src}
                alt=""
                className={styles.logo}
              />
              {siteTitle}
            </a>
          </Link>
          <ThemeToggle />
        </header>
      )}
    </>
  )
};