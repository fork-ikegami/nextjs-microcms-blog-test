import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';
import { siteTitle } from '@/settings/index';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header =({ home }: { home: boolean }) => {
  return (
    <>
      {home ? (
        <header id="globalHeader" className={`${styles.header} ${styles.headerIsHome}`}>
          <h1 className={styles.title}>
            <span className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
              />
            </span>
            {siteTitle}
          </h1>
          <ThemeToggle />
        </header>
      ) : (
        <header id="globalHeader" className={styles.header}>
          <Link href="/">
            <a className={styles.link}>
              <span className={styles.logo}>
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={36}
                  height={36}
                />
              </span>
              {siteTitle}
            </a>
          </Link>
          <ThemeToggle />
        </header>
      )}
    </>
  )
};