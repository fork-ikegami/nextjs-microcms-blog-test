import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { WiMoonAltFirstQuarter } from 'react-icons/wi';
import styles from '@/styles/components/ThemeToggle.module.scss';

export const ThemeToggle = () => {
  // mounted後じゃないとundefinedになる
  // コンソールエラーが良くわからないので保留
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  // テーマ切り替えボタン
  function toggleTheme() {
    if (isLight) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <WiMoonAltFirstQuarter />
    </button>
  )
}