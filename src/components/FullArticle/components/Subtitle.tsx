import { Text } from '@chakra-ui/react';

export const Subtitle = ({ children }) => (
  <Text fontWeight={600} p={2} fontSize={{ md: 'lg', lg: 'xl' }}>
    {children}
  </Text>
);
