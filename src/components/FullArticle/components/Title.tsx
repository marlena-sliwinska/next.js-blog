import { Text } from '@chakra-ui/react';

export const Title = ({ children }) => (
  <Text fontWeight="bold" p={2} pb={4} fontSize={{ sm: 'xl', md: '2xl' }}>
    {children}
  </Text>
);
