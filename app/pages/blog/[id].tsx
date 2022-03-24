import path from 'path';
import fs from 'fs';
import { useEffect } from 'react'
import Head from 'next/head';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import Layout from '@/components/Layout';
import { Date } from '@/components/Date';
import { siteTitle } from '@/settings/index';
import { blog } from '@/interfaces/index';
import styles from '@/styles/Post.module.scss';
import Link from 'next/link';
import allBlogData from '@/data/allBlogData.json';

export default function BlogId({ blog, highlightedBody }: {
  blog: blog,
  highlightedBody: string,
}){
  useEffect(()=>{
    // 埋め込む場合は使用
    // // Twitter
    // const scriptTw = document.createElement('script');
    // scriptTw.src = "https://platform.twitter.com/widgets.js";
    // document.body.appendChild(scriptTw);

    // // Instagram
    // const scriptInsta = document.createElement('script');
    // scriptInsta.src = "https://www.instagram.com/embed.js";
    // scriptInsta.setAttribute("async", "true");
    // document.body.appendChild(scriptInsta);
    // if ((window as any).instgrm) {
    //   (window as any).instgrm.Embeds.process()
    // }

    // // scriptタグを消す
    // return () => {
    //   document.body.removeChild(scriptTw);
    //   document.body.removeChild(scriptInsta);
    // }
  }, [])
  return (
    <Layout>
      <Head>
        <title>{blog.title} | {siteTitle}</title>
        <meta property="og:title" content={`${blog.title} | ${siteTitle}`} />
        <meta property="og:type" content="article" />
      </Head>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.date}>
        <Date dateString={blog.publishedAt} />
        <Link href={`/category/${blog.category.id}/page/1/`}>
          <a className={styles.category}>{blog.category && `${blog.category.name}`}</a>
        </Link>
      </div>
      <ul className={styles.tagList}>
        {blog.tag.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}/page/1/`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div 
        dangerouslySetInnerHTML={{
          __html: `${highlightedBody}`,
        }}
        className={styles.post}
      />
    </Layout>
  );
}

// 静的生成のパス指定
export const getStaticPaths = async () => {
  const paths = allBlogData.map((content: {id:string}) => `/blog/${content.id}/`);
  return { paths, fallback: false};
  // return { paths, fallback: true};
};

// データをテンプレートに渡す
export const getStaticProps = async (context: {
  params: { id: string },
}) => {
  // /dataのjsonファイルを参照
  const id = context.params.id;
  const filePath = path.join(process.cwd(),'data', 'allBlogData.json');
  const blogJson = fs.readFileSync(filePath, 'utf8');
  const blogData = JSON.parse(blogJson) as blog[];
  const currentBlog = blogData.find((blog) => blog.id === id) || {body:''};

  // シンタックスハイライト
  const $ = cheerio.load(currentBlog.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: currentBlog,
      highlightedBody: $.html(),
    },
  };
};