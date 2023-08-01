import { Image, Text, HStack } from '@chakra-ui/react';

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize={'35px'}
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium" fontSize={'sm'}>
        {props.name}
      </Text>
      <Text fontSize={'sm'}>—</Text>
      <Text fontSize={'sm'}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export default BlogAuthor;
