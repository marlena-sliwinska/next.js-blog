import Image from 'next/image';
import { Stack, Text, chakra } from '@chakra-ui/react';

const AboutMeImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const AboutMe = () => {
  return (
    <Stack
      spacing={4}
      p={2}
      borderWidth={{ base: '1px 0 0 0', md: '1px' }}
      borderColor="gray.200"
      alignSelf="center"
      alignItems={{ base: 'center' }}
    >
      <Text fontWeight="bold">ABOUT ME</Text>
      <AboutMeImage
        objectFit="contain"
        width="151"
        height="259"
        rounded={'3xl'}
        src={'/images/basic/aboutMe/about_me.jpg'}
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
