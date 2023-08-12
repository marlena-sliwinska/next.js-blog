import { Box, useColorModeValue } from '@chakra-ui/react';

export const Blockquote = (props) => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.900', 'gray.50')}
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    rounded="lg"
    m="0 auto"
    my={4}
  >
    {props.children}
  </Box>
);
