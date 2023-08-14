import { ReactNode } from 'react';
import { Flex, Box, Grid, GridItem, Stack } from '@chakra-ui/react';

import { AboutMe } from 'components/AboutMe';

const BlogLayout = ({ children }: { children: ReactNode }) => (
  <Grid gap={4} gridTemplateColumns={{ md: 'auto 250px', base: 'auto' }}>
    <GridItem>
      <Box px={4}> {children}</Box>
    </GridItem>
    <GridItem>
      <Stack spacing={4} mx={{ base: 4, md: 2 }}>
        <AboutMe />
        {
          // todo:
        }
        <Box bg="pink">Search</Box>
        <Box bg="pink">Tags</Box>
      </Stack>
    </GridItem>
  </Grid>
);

export default BlogLayout;
