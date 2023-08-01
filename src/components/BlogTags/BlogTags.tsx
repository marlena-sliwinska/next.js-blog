import { HStack, Tag, SpaceProps, Box } from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = ({ tags, marginTop }) => {
  return (
    // todo:
    <HStack spacing={0} marginTop={marginTop} sx={{ flexWrap: 'wrap' }}>
      {tags.map((tag) => {
        return (
          <Box pb={1} pr={1}>
            <Tag size="sm" variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          </Box>
        );
      })}
    </HStack>
  );
};

export default BlogTags;
