import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { BlogLayout } from 'layout/BlogLayout';

import { getPostData, getPostsFiles } from 'utils/post-util';
import { FullArticle } from 'components/FullArticle';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BlogLayout>
      <FullArticle post={post} />
    </BlogLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = (context) => {
  const {
    params: { slug },
  } = context;
  if (typeof slug !== 'string') {
    throw new Error('Something went wrong...');
  }
  const post = getPostData(slug);
  return { props: { post } };
};

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
