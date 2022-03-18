import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import { Twemoji } from 'react-emoji-render';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react';

export default function AdminForm({isAdmin}) {
  const history = useHistory();
  const [state, setState] = useState({
    title: '',
    technology: '',
    company: '',
    locality: '',
    contract: '',
    salary: '',
    description: '',
    url: '',
    user_id: isAdmin
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
        "title" : state.title,
        "technology" : state.technology,
        "company" : state.company,
        "locality" : state.locality,
        "contract" : state.contract,
        "salary" : state.salary,
        "description" : state.description,
        "url" : state.url,
        'user_id': localStorage.getItem('USER_ID'),
      };
      
     axios.post('http://18.212.203.228:5050/jobs/save', payload,
     {headers: {
       'Authorization':`Bearer ${localStorage.getItem('USER_TOKEN')}`,
     }}
     )
       .then((response) => {
         redirectToHome();
         if (response.status === 200) {
           setState((prevState) => ({
             ...prevState,
           }));
           console.log(response)
           // props.showError(null);
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
    console.log(history)
    history.push('/');
  };
    // const redirectToLogin = () => {
    // history.push('/login');
    // };

  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      height="100%"
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Ajouter une offre <Twemoji display="flex" onlyEmojiClassName="twemoji" display="flex" text="📝" /></Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Titre de l'offre</FormLabel>
              <Input
                type="text"
                id="title"
                value={state.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="technology">
              <FormLabel>Technos</FormLabel>
              <Input
                type="text"
                id="technology"
                value={state.technology}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="company">
              <FormLabel>Entreprise</FormLabel>
              <Input
                type="text"
                id="company"
                value={state.company}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="locality">
              <FormLabel>Localisation</FormLabel>
              <Input
                type="text"
                id="locality"
                value={state.locality}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="contract">
              <FormLabel>Contrat</FormLabel>
              <Input
                type="text"
                id="contract"
                value={state.contract}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="salary">
              <FormLabel>Salaire</FormLabel>
              <Input
                type="text"
                id="salary"
                value={state.salary}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="description">
              <FormLabel>Description de l'offre</FormLabel>
              <Textarea type="text"
                id="description"
                value={state.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="url">
              <FormLabel>URL de l'offre</FormLabel>
              <Input type="text"
                id="url"
                value={state.url}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
              </Stack>
              <Button
                color="#0468ae"
                onClick={handleSubmitClick}
              >
                Publier
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
