import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  HStack,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

import { FaInstagram, FaYoutube } from 'react-icons/fa';

import { SocialButton } from 'components/SocialButton';
import { ContactForm } from 'components/ContactForm';

{
  // todo: make some validation
  //  split this code, move to components folder
}

const Contact = () => {
  return (
    <Container maxW="7xl" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="blue.800"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{}}
                        leftIcon={<MdPhone color="blue.400" size="20px" />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{}}
                        leftIcon={<MdEmail color="blue.400" size="20px" />}
                      >
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{}}
                        leftIcon={<MdLocationOn color="blue.400" size="20px" />}
                      >
                        Wroclaw, Poland
                      </Button>
                    </VStack>
                  </Box>
                  <Box px={2}>
                    <HStack justifyContent="space-between">
                      <SocialButton label={'Twitter'} href={'#'}>
                        <BsGithub />
                      </SocialButton>
                      <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                      </SocialButton>
                      <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                      </SocialButton>
                    </HStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <ContactForm />
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
