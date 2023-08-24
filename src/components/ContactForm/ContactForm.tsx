import { useCallback, useRef, useState } from 'react';
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
import { string } from 'yup';

const Fields = {
  name: 'name',
  email: 'email',
  message: 'message',
};

const ContactForm = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [nameError, setNameError] = useState<null | boolean>(null);
  const [emailError, setEmailError] = useState<null | boolean>(null);
  const [messageError, setMessageError] = useState<null | boolean>(null);

  const resetForm = useCallback(() => {
    name.current.value = null;
    email.current.value = null;
    message.current.value = null;
    setNameError(null);
    setEmailError(null);
    setMessageError(null);
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };

    const nameError = await string().required().isValid(newMessage.name);
    const emailError = await string().email().required().isValid(newMessage.email);
    const messageError = await string().required().isValid(newMessage.message);

    setNameError(!nameError);
    setEmailError(!emailError);
    setMessageError(!messageError);

    if (!nameError || !emailError || !messageError) {
      console.log(nameError, emailError, messageError);
      return;
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    });
    if (response.status === 201) {
      resetForm();
    } else {
      // handle error
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <VStack spacing={5}>
        <FormControl id="name" isRequired isInvalid={!!nameError}>
          <FormLabel>Your Name</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <BsPerson color="gray.800" />
            </InputLeftElement>
            <Input ref={name} type="text" size="md" name={Fields.name} />
          </InputGroup>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={!!emailError}>
          <FormLabel>Mail</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              <MdOutlineEmail color="gray.800" />
            </InputLeftElement>
            <Input ref={email} type="text" size="md" name={Fields.email} />
          </InputGroup>
        </FormControl>
        <FormControl id="message" isRequired isInvalid={!!messageError}>
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
            bg="blue.500"
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
