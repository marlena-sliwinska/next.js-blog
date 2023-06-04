import { ArticleList } from 'components/ArticleList';
import { BlogLayout } from 'layout/BlogLayout';

const Home = () => {
  return (
    <BlogLayout>
      <ArticleList />
    </BlogLayout>
  );
};

export default Home;
