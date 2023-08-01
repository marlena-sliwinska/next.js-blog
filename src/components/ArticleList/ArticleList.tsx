import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Heading, Container } from '@chakra-ui/react';

import { Article } from 'components/Article';
import { IArticle } from 'components/Article/Article.model';

const ArticleList = ({ posts }: { posts: IArticle[] }) => (
  <Container maxW={'7xl'} p="12">
    <Heading as="h1">Stories by Marlena</Heading>

    {
      // todo: add _id's to posts
      // and blog tags
      posts.map((post) => (
        <Article {...post} key={post._id} />
      ))
    }
  </Container>
);

export default ArticleList;
