import Layout from '../../components/laylout';
import { getAllPostIds, getPostData  } from '../../lib/index';
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };

}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
  // Fetch necessary data for the blog post using params.id
}

const Post = ({postData}) => {
  return (
  <Layout Post>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
  </Layout>
  )
}

export default Post;
