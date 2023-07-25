import { useRef } from 'react';
import {
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const Fields = {
  name: 'name',
  email: 'email',
  message: 'message',
};

const ContactForm = () => {
  {
    // todo: make some validation
    //  split this code, move to components folder
  }

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  console.log('kontatk');
  const onSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    // todo: validation

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    });
    console.log(response);
  };

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={5}>
        <FormControl id="name">
          <FormLabel>Your Name</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement
              pointerEvents="none"
              children={<BsPerson color="gray.800" />}
            />
            <Input ref={name} type="text" size="md" name={Fields.name} />
          </InputGroup>
        </FormControl>
        <FormControl id="name">
          <FormLabel>Mail</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement
              pointerEvents="none"
              children={<MdOutlineEmail color="gray.800" />}
            />
            <Input ref={email} type="text" size="md" name={Fields.email} />
          </InputGroup>
        </FormControl>
        <FormControl id="name">
          <FormLabel>Message</FormLabel>
          <Textarea
            borderColor="gray.300"
            _hover={{
              borderRadius: 'gray.300',
            }}
            placeholder="message"
            name={Fields.message}
            ref={message}
          />
        </FormControl>
        <FormControl id="name" float="right">
          <Button
            variant="solid"
            bg="#0D74FF"
            color="white"
            _hover={{}}
            type="submit"
          >
            Send Message
          </Button>
        </FormControl>
      </VStack>
    </form>
  );
};

export default ContactForm;
