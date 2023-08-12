import { Image as ChakraImage, Box } from '@chakra-ui/react';

export const Image = ({ alt, src, post }) => (
  <Box display="flex" justifyContent="center">
    <ChakraImage
      width={150}
      height={150}
      src={`/images/posts/${post.slug}/${src}`}
      alt={alt}
    />
  </Box>
);
