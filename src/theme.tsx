import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      articleText: { default: 'gray.600', _dark: 'white' },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  components: {
    Text: {
      variants: {
        fullArticleTitle: {
          bg: 'teal.500',
          fontSize: 'xl',
        },
      },
    },
  },
});

export default theme;
