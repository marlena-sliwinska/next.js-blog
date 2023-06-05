import { ReactNode } from 'react';
import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';

const BlogLayout = ({ children }: { children: ReactNode }) => (
  <Grid gap={4} gridTemplateColumns={{ md: 'auto 250px', base: 'auto' }}>
    <GridItem> {children}</GridItem>
    <GridItem>
      <Flex flexFlow="column">
        {
          // todo:
        }
        <Box bg="pink">About me</Box>
        <Box bg="pink">Search</Box>
        <Box bg="pink">Tags</Box>
      </Flex>
    </GridItem>
  </Grid>
);

export default BlogLayout;
