import { ReactNode } from 'react';
import {
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Grid,
  GridItem,
  Stack,
  Container,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { AboutMe } from 'components/AboutMe';

const BlogLayout = ({ children }: { children: ReactNode }) => (
  <Container maxW="7xl">
    <Grid gap={4} gridTemplateColumns={{ md: 'auto 250px', base: 'auto' }}>
      <GridItem>
        <Box px={4}> {children}</Box>
      </GridItem>
      <GridItem>
        <Stack spacing={4} mx={{ base: 4, md: 2 }}>
          <AboutMe />
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input type="text" placeholder="Search..." borderRadius="none" />
          </InputGroup>
          {
            // todo: optional tags or catagories
          }
        </Stack>
      </GridItem>
    </Grid>
  </Container>
);

export default BlogLayout;
