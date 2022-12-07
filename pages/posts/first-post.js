import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { ImageComponent } from '../../public/ImageComponent';
const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
        <Script src="https://connect.facebook.net/en_US/sdk.js"
          strategy='lazyOnload'
          onLoad={console.log('loaded')}
        />
      </Head>
      <h1>First Post</h1>
      {ImageComponent()}
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}

export default FirstPost;