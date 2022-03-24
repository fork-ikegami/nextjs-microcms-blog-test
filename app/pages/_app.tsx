import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { microCMS } from '@/libs/context';
import allBlogData from '@/data/allBlogData.json';
import allCategoryData from '@/data/allCategoryData.json';
import allTagData from '@/data/allTagData.json';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <microCMS.Provider value={{ allBlogData, allCategoryData, allTagData }}>
        <Component {...pageProps} />
      </microCMS.Provider>
    </ThemeProvider>
  )
}

export default MyApp