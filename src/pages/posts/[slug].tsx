import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import { Text } from '@chakra-ui/react';

import { IArticle } from 'components/Article/Article.model';
import { createFakePost } from 'utils/createFakePost';
import { BlogLayout } from 'layout/BlogLayout';

import { articleList } from '.';
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

/* export const getStaticProps: GetStaticProps<{ post: IArticle }> = () => {
  const post = createFakePost();

  return { props: { post } };
}; */

export const getStaticProps: GetStaticProps = (context) => {
  const {
    params: { slug },
  } = context;
  const post = getPostData(slug);
  return { props: { post: post } };
};

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
