import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { IArticle } from 'components/Article/Article.model';

import { ArticleList } from 'components/ArticleList';
import { BlogLayout } from 'layout/BlogLayout';
import { getAllPosts } from 'utils/post-util';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <BlogLayout>
    <ArticleList posts={posts} />
  </BlogLayout>
);

export default Posts;

export const getStaticProps: GetStaticProps<{ posts: IArticle[] }> = () => {
  // todo: do some network letancy
  const articleList = getAllPosts();
  return { props: { posts: articleList } };
};
