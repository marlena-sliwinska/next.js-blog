import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { IArticle, createFakePost } from 'utils/createFakePost';

import { ArticleList } from 'components/ArticleList';
import { BlogLayout } from 'layout/BlogLayout';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BlogLayout>
      <ArticleList posts={posts} />
    </BlogLayout>
  );
};

export default Posts;

export const articleList = [
  createFakePost(),
  createFakePost(),
  createFakePost(),
  createFakePost(),
];
export const getStaticProps: GetStaticProps<{ posts: IArticle[] }> = () => {
  // do some network letancy
  return { props: { posts: articleList } };
};
