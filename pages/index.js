import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/index';

import { loadNaverNews } from '../lib/load-naver';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const news = await loadNaverNews();
  // const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/naver?query=news&searchText=코로나&display=10&start=1`);

  const data = news.items;

  console.log(data);

  return {
    props: {
      allPostsData,
      news: data
    },
  };
}

// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/naver?query=news&searchText=코로나&display=10&start=1`);

//   const data = res.data.text;

//   return {
//     props: {
//       allPostsData,
//       news: data.items
//     },
//   }
// }


export default function Home({allPostsData, news} ){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <h1>Blog</h1>
        <ul>
          { allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
      <section className={utilStyles.headingMd}>
        <h1>News</h1>
        <ul>
            { news.map(({ pubDate, title, link }) => (
              <li className={utilStyles.listItem} key={link + 'news'}>
              <Link href={link}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {pubDate}
              </small>
            </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}