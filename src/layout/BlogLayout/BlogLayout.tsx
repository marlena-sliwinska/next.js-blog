import { ReactNode } from 'react';
import { Flex, Box, Grid, GridItem, Text } from '@chakra-ui/react';

const BlogLayout = ({ children }: { children: ReactNode }) => (
  <Grid gap={4} gridTemplateColumns={{ md: 'auto 250px', base: 'auto' }}>
    <GridItem> {children}</GridItem>
    <GridItem>
      <Flex flexFlow="column">
        {
          // todo:
        }
        <Box bg="pink">
          <Text>About me</Text>
        </Box>
        <Box bg="pink">Search</Box>
        <Box bg="pink">Tags</Box>
      </Flex>
    </GridItem>
  </Grid>
);

export default BlogLayout;
