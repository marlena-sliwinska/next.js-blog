import { Text } from '@chakra-ui/react';

export const SimpleText = ({ children }) => (
  <Text color="articleText" py={1} px={2} textAlign="justify" textIndent="2em">
    {children}
  </Text>
);
