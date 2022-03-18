import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import { Twemoji } from 'react-emoji-render';
import {
  Text,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Link,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function RegistrationForm() {
  const history = useHistory();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    const payload = {
      "firstname": state.firstname,
      "lastname": state.lastname,
      "email": state.email,
      "password": state.password,
    };

    axios.post("http://18.212.203.228:5050" + "/users/registerUser", payload)
      .then((response) => {
        redirectToHome();
        // console.log(response)
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
          }));
        } else {
          // props.showError("Erreur");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // console.log(state);
    sendDetailsToServer();
  };

  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      height="100%"
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box align="center" justifyContent="center" display="flex">
          <Heading display="flex" fontSize="4xl">Inscription <Twemoji display="flex" onlyEmojiClassName="twemoji" display="flex" text="👩🏻‍💻" /></Heading>
        </Box>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Prénom</FormLabel>
              <Input
                type="text"
                id="firstname"
                value={state.firstname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Nom</FormLabel>
              <Input
                type="text"
                id="lastname"
                value={state.lastname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Adresse e-mail</FormLabel>
              <Input
                type="email"
                id="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirmez votre mot de passe</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                value={state.confirmPassword}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Link as={ReactLink} to='/login'>
                  <Text
                    color="#0468ae">
                    Déja un compte ? Connectez-vous
                  </Text>
                </Link>
              </Stack>
              <Button
                color="#0468ae"
                onClick={handleSubmitClick}
              >
                Je m'inscris
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
