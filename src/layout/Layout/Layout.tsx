import { ReactNode } from 'react';
import { chakra, Flex } from '@chakra-ui/react';

import { Navigation } from 'layout/Navigation';
import { Footer } from 'layout/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex minH="100vh" flexFlow="column">
      <Navigation />
      <chakra.main flexGrow={1} p={2}>
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
};

export default Layout;
