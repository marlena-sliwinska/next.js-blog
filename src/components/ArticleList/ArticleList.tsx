import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Heading, Container } from '@chakra-ui/react';

import { Article } from 'components/Article';
import { IArticle } from 'utils/createFakePost';

const ArticleList = ({ posts }: { posts: IArticle[] }) => (
  <Container maxW={'7xl'} p="12">
    <Heading as="h1">Stories by Marlena</Heading>
    {posts.map((post) => (
      <Article {...post} key={post._id} />
    ))}
  </Container>
);

export default ArticleList;
