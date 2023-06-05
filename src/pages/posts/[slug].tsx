import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { IArticle, createFakePost } from 'utils/createFakePost';

import { BlogLayout } from 'layout/BlogLayout';

import { articleList } from '.';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BlogLayout>
      {
        // todo:
      }
      {/* <FullArticle post={post} /> */}
      {JSON.stringify(post)}
    </BlogLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<{ post: IArticle }> = () => {
  const post = createFakePost();

  // do some network letancy
  return { props: { post } };
};

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      `/posts/${articleList[0].slug}`,
      // Object variant:
      { params: { slug: articleList[0].slug } },
    ],
    fallback: true,
  };
}
