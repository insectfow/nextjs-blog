import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import List from '../components/List';
import { loadNaver } from '../lib/load-naver';



export async function getStaticProps() {
  const news = await loadNaver('news');
  const blog = await loadNaver('blog');
  const cafearticle = await loadNaver('cafearticle');

  return {
    props: {
      news,
      blog,
      cafearticle
    },
  };
}

export default function Home({ news, blog, cafearticle, isLoggedIn }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <List data={blog} title={'Blog'}></List>
      <List data={news} title={'News'}></List>
      <List data={cafearticle} title={'Cafe'}></List>
    </Layout>
  );
}