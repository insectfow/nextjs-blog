import Head from 'next/head';
import Layout, { siteTitle } from '../components/laylout.js';
import utilStyles from '../styles/utils.module.scss';

import { getSortedPostsData } from '../lib/index';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({allPostsData} ){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Home</h1>
        <ul>
          { allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}