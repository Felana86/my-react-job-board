import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import {
  Heading,
  Box,
  Text,
  useColorModeValue,
  Flex,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

export default function Page404() {
  return (
    <>
      <Heading align={'center'} as="h1" bg={useColorModeValue('gray.50', 'gray.800')} pt="4em">Oups. Erreur 404</Heading>
      <Flex h="50vh" p={5} flexWrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
        <Flex justifyContent="center" spacing="24px" flexWrap="wrap">
          <Box
            m="0.5em"
            w="100%"
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={4}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}>
            <Text
              fontWeight={700}
              color="#0468ae"
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
              textAlign={'center'}>
              La page que tu demandes n'existe pas.
            </Text>
            <Link as={ReactLink} to='/'>
              <Text
                fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}
                color="#0468ae">
                Retour à l'accueil
              </Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
