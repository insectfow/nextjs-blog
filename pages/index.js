import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';


import { getSortedPostsData } from '../lib/index';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const data = await fetch('http://localhost:3000/api/naver?query=news&searchText=코로나&display=10&start=1')
    .then((res) => 
      {
      return res.json();
      }
  )
  
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
      news: data.text.items
    },
  };
}

export default function Home({ allPostsData, pages, news }) {
  
  console.log(news);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <nav>
        <ul>
          { pages.map(({ pageName, path, id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${path}`}>{pageName}</Link>
          </li>
          ))}
        </ul>
      </nav> */}
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
          <li>
            { news.map(({ id, pubDate, title, link }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={link}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {pubDate}
              </small>
            </li>
            ))}
          </li>
          {/* {news.map(({ title, pubDate, description, link }) => {
            <li className={utilStyles.listItem} key={pubDate}>
              <Link href={link}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={pubDate} />
              </small>
            </li>
          })} */}
        </ul>
      </section>
    </Layout>
  );
}