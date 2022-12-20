import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';
const { VERCEL_URL } = process.env;
import { getSortedPostsData } from '../lib/index';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

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
      allPostsData,
      pages,
      // news: data ? data.text.items : []
    },
  };
}

export default function Home({ allPostsData, pages, news }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <nav>
        <ul>
          { pages.map(({ pageName, path, id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${path}`}>{pageName}</Link>
          </li>
          ))}
        </ul>
      </nav>
      <section className={utilStyles.headingMd}>
        <h1>Blog</h1>
        <ul>
          { allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id + 'blog'}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      {/* <section className={utilStyles.headingMd}>
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
      </section> */}
    </Layout>
  );
}