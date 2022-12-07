import Link from 'next/link';
import { ImageComponent } from '../../public/ImageComponent';
const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      {ImageComponent()}
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}

export default FirstPost;