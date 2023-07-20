import { ReactNode } from 'react';
import { Link as ChakraUiLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <ChakraUiLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
    as={Link}
  >
    {children}
  </ChakraUiLink>
);

export default NavLink;
