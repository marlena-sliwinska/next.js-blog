import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { PlayIcon } from './components/PlayIcon';
import { Blob } from './components/Blob';

export const Hero = () => (
  <Container maxW="7xl">
    <Stack
      align="center"
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}
          >
            Welcome
          </Text>
          <br />
          <Text as="span" color="red.400">
            to my blog!
          </Text>
        </Heading>
        <Text color="gray.500">
          I am thrilled to have you here. In this space, I'll be sharing my thoughts,
          experiences, and passions with you. Whether you're a regular reader or a
          newcomer, I hope you find something inspiring and enjoyable in my posts.
        </Text>
      </Stack>
      <Flex flex={1} justify="center" align="center" position="relative" w="full">
        <Blob
          w="150%"
          h="150%"
          position="absolute"
          top="-20%"
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        />
        <Box
          position="relative"
          height="300px"
          rounded="2xl"
          boxShadow="2xl"
          width="full"
          overflow="hidden"
        >
          <IconButton
            aria-label="Play Button"
            variant="ghost"
            _hover={{ bg: 'transparent' }}
            icon={<PlayIcon w={12} h={12} />}
            size="lg"
            color="white"
            position="absolute"
            left="50%"
            top="50%"
            transform="translateX(-50%) translateY(-50%)"
          />
          <Image
            alt="Hero Image"
            fit="cover"
            align="center"
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
);

export default Hero;
