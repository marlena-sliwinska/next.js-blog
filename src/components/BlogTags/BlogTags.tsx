import { HStack, Tag, SpaceProps, Box } from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = ({ tags, marginTop }) => (
  <HStack spacing={0} marginTop={marginTop} sx={{ flexWrap: 'wrap' }}>
    {tags.map((tag) => {
      return (
        <Box pb={1} pr={1} key={tag}>
          <Tag size="sm" variant="solid" colorScheme="gray" key={tag}>
            {tag}
          </Tag>
        </Box>
      );
    })}
  </HStack>
);

export default BlogTags;
