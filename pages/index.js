import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';



import { getSortedPostsData } from '../lib/index';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
      pages
    },
  };
}

export default function Home({allPostsData, pages} ){
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
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}