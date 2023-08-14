import { Stack, Text, Image } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Stack
      spacing={4}
      p={2}
      borderWidth={{ base: '1px 0 0 0', md: '1px' }}
      borderColor="gray.200"
      alignSelf="center"
      alignItems={{ base: 'center', md: 'flex-start' }}
      //    width={{ base: 'calc(100vw - 30px)', sm: 'calc(100vw - 230px)', md: 'auto' }}
    >
      <Text fontWeight="bold">ABOUT ME</Text>
      <Image
        width="220px"
        height="160px"
        src={'https://loremflickr.com/220/160/paris,girl'}
        alt="about me image"
      />
      <Text maxW={450} textAlign="justify" textIndent="15px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium
        leo urna. Vestibulum fermentum iaculis libero a egestas. Aenean ac finibus
        orci. Etiam lacinia orci quis purus auctor facilisis. Nulla facilisi. Nulla
        in nibh quam.
      </Text>
    </Stack>
  );
};

export default AboutMe;
