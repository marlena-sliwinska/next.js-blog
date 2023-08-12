import { Box } from '@chakra-ui/react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const Code = ({ children, className }) => {
  const language = className ? className.split('-')[1] : 'javascript';
  return (
    <Box
      m={3}
      maxW={{ base: 'calc(100vw - 75px)', md: 'calc(100vw - 345px)' }}
      overflowX="auto"
    >
      <SyntaxHighlighter language={language} style={tomorrow}>
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};
