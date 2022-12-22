import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import List from '../components/List';

import { loadNaver } from '../lib/load-naver';

export async function getStaticProps() {
  const news = await loadNaver('news');
  const blog = await loadNaver('blog');

  // const data = await fetch(`${VERCEL_URL}/api/naver?query=news&searchText=코로나&display=10&start=1`)
  //   .then((res) => res.json())
  //   .catch((error) => console.log(error));
  
  const pages = [
    {
      id: 0,
      pageName: '강화하기',
      path: 'enhance'
    }
  ]

  return {
    props: {
      news,
      blog
    },
  };
}

export default function Home({ news, blog }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <List data={blog} title={'Blog'}></List>
      <List data={news} title={'News'}></List>
    </Layout>
  );
}