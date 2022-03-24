import { useEffect, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs';
import styles from '@/styles/components/Footer.module.scss';
import 'scroll-behavior-polyfill';

export const Footer = () => {
  // トップへ戻るボタン
  const ReturnTopButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);

    const returnTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    useEffect(() => {
      // headerを監視
      const $header = document.getElementById('globalHeader');
      const options = {
        root: null,
        threshold: [0, 1.0],
      };
      const observer = new IntersectionObserver(doWhenIntersect, options);

      if($header) {
        observer.observe($header);
      }

      function doWhenIntersect(entries:{isIntersecting:boolean}[]) {
        if (entries[0].isIntersecting) {
          setIsButtonActive(false);
        } else {
          setIsButtonActive(true);
        }
      }
      return () => {
        observer.disconnect();
      }
    })

    const normalStyle = {
      opacity: 0,
      pointerEvents: 'none'
    }
    const activeStyle = {
      opacity: .8,
    }
    const style = isButtonActive ? activeStyle : normalStyle

    return <button type="button" id="scrollTopButton" style={style} className={styles.button} onClick={returnTop}><BsArrowUpCircle /></button>
  }

  return (
    <>
      <footer className={styles.footer}>
        {/* <p>&copy; 2022</p> */}
      </footer>
      <ReturnTopButton />
    </>
  )
}