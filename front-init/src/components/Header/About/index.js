import React from 'react';

import { 
  Heading, 
  Link, 
  Avatar, 
  Box, 
  Stack, 
  Text, 
  useColorModeValue, 
  Flex, 
  useBreakpointValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function About() {
  return (
    <>
      <Heading align={'center'} as="h1" bg={useColorModeValue('gray.50', 'gray.800')} pt="1em">A propos</Heading>
      <Flex p={5} flexWrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
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
              React... ton framework frontend de coeur ?
            </Text>
            <Text
              fontWeight={500}
              fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}
              textAlign={'center'}>
              React-jobs.fr est la source #1 pour trouver la prochaine mission React qui te correspond. <br /> Nous sélectionnons les offres les plus pertinentes en France pour te faciliter la vie.
            </Text>
            <Text
              fontWeight={700}
              fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
              textAlign={'center'}
              mt="1em"
              color="#0468ae">
              #Entraide #Communauté #Passion
            </Text>
            <Text
              mt="1em"
              fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
              textAlign={'center'}
              maxW={'3xl'}>
              Le projet a été créé par cinq développeurs formés par <Link href="https://oclock.io/" isExternal>O'clock<ExternalLinkIcon mx="5px" /></Link>
            </Text>
          </Box>
          <Box
            w="0.5em"
            w="100%"
            maxWidth="1200px"
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={8}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            background="linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?cs=srgb&dl=pexels-markus-spiske-177598.jpg&fm=jpg)"
            backgroundSize={'cover'}
            borderRadius="5px">
            <Text
              textAlign={'center'}
              maxW={'3xl'}
              color="white"
              textShadow="1px 1px 20px #000000"
              fontWeight={700}
              fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}>
              Bon à savoir : React est le framework le plus recherché dans le monde :
              59% des recruteurs tech sont à l'affût de développeurs connaissant React.
              Malheureusement, seuls 27,6% des programmeurs disent savoir l'utiliser.
            </Text><Link color="white" href="https://www.codingame.com/work/codingame-developer-survey-2021/" isExternal>(Source : Codingame.com - 2021)<ExternalLinkIcon mx="5px" /></Link>
          </Box>
        </Flex>
      </Flex>
      <Heading align={'center'} as="h2" bg={useColorModeValue('gray.50', 'gray.800')} pt="1em">Notre équipe</Heading>
      <Flex p={1} wrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
        <Stack
          m="0.5em"
          w="300px"
          bg={useColorModeValue('gray.50', 'gray.800')}
          _hover={{
            boxShadow: 'lg',
          }}
          py={8}
          px={8}
          spacing={{ base: 6, md: 8 }}
          align={'center'}
          direction={'column'}>
          <Text
            fontSize={{ base: 'm', md: 'm' }}
            textAlign={'center'}
            maxW={'3xl'}>
            32 ans, je vis à Arras dans le Pas-de-Calais (62), actuellement chargé de communication et développeur web React en devenir.
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://i.goopics.net/1bxvg.jpg'
              }
              alt={'Jenny Wilson'}
              mb={2}
            />

            <Link href="https://www.linkedin.com/in/florian-delobelle-42681b45/" isExternal>
              <Text color="#0468ae" fontWeight={600}>Florian Delobelle</Text>
            </Link>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
              Product Owner et Dev Front
            </Text>
          </Box>
        </Stack>
        <Stack
          m="0.5em"
          w="300px"
          bg={useColorModeValue('gray.50', 'gray.800')}
          _hover={{
            boxShadow: 'lg',
          }}
          py={8}
          px={8}
          spacing={{ base: 6, md: 8 }}
          align={'center'}
          direction={'column'}>
          <Text
            fontSize={{ base: 'm', md: 'm' }}
            textAlign={'center'}
            maxW={'3xl'}>
            37 ans, domiciliée en Dordogne, ex-Biologiste et anciennement Attachée de Recherche Clinique, maman fière de deux petites filles et folle de SQL !
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://media-exp1.licdn.com/dms/image/C4D03AQHiB8eXPFjsBA/profile-displayphoto-shrink_800_800/0/1613555923540?e=1633564800&v=beta&t=752IJtCMhi3M3mSSzcWwL-q2RRj4nY4g0so7NiK2rpk'
              }
              alt={'Caro Wiese'}
              mb={2}
            />

            <Link href="https://www.linkedin.com/in/carowiese?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlRfhnLi6QDaG1yAqX4MFGg%3D%3D" isExternal>
              <Text color="#0468ae" fontWeight={600}>Caroline Wiese</Text>
            </Link>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
              Lead Dev Back
            </Text>
          </Box>
        </Stack>

        <Stack
          m="0.5em"
          w="300px"
          bg={useColorModeValue('gray.50', 'gray.800')}
          _hover={{
            boxShadow: 'lg',
          }}
          py={8}
          px={8}
          spacing={{ base: 6, md: 8 }}
          align={'center'}
          direction={'column'}>
          <Text
            fontSize={{ base: 'm', md: 'm' }}
            textAlign={'center'}
            maxW={'3xl'}>
            32 ans, installé en Normandie, j'ai trouvé le chemin du développement web après avoir travaillé dans différentes Maisons de Couture.
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://media-exp1.licdn.com/dms/image/C5103AQGhQV2sQZW2FA/profile-displayphoto-shrink_800_800/0/1516959223349?e=1633564800&v=beta&t=bxAkHHZm9AkS_twJC-s85w4ZvCn0fEFK9sZG9TvXACc'
              }
              alt={'Jenny Wilson'}
              mb={2}
            />

            <Link href="https://www.linkedin.com/in/florian-brun-buisson-631053145/" isExternal>
              <Text color="#0468ae" fontWeight={600}>Florian Brun-Buisson</Text>
            </Link>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
              Lead Dev Front
            </Text>
          </Box>
        </Stack>

        <Stack
          m="0.5em"
          w="300px"
          bg={useColorModeValue('gray.50', 'gray.800')}
          _hover={{
            boxShadow: 'lg',
          }}
          py={8}
          px={8}
          spacing={{ base: 6, md: 8 }}
          align={'center'}
          direction={'column'}>
          <Text
            fontSize={{ base: 'm', md: 'm' }}
            textAlign={'center'}
            maxW={'3xl'}>
            39 ans, Poitiers. Dev Web Backend. “Quand on veut une chose, tout l'Univers conspire à nous permettre de réaliser notre rêve.” Paulo Coelho
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://i.goopics.net/AP5Yb.jpg'
              }
              alt={'Felana Letrange'}
              mb={2}
            />

            <Link href="https://www.linkedin.com/in/felana-letrange/" isExternal>
              <Text color="#0468ae" fontWeight={600}>Felana Letrange</Text>
            </Link>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
              Git Master et Dev Back
            </Text>
          </Box>
        </Stack>

        <Stack
          m="0.5em"
          w="300px"
          bg={useColorModeValue('gray.50', 'gray.800')}
          _hover={{
            boxShadow: 'lg',
          }}
          py={8}
          px={8}
          spacing={{ base: 6, md: 8 }}
          align={'center'}
          direction={'column'}>
          <Text
            fontSize={{ base: 'm', md: 'm' }}
            textAlign={'center'}
            maxW={'3xl'}>
            34 ans, domicilié à Boulogne-sur-Mer (Pas-de-Calais, 62), ex-journaliste sportif en quête de reconversion. En bref, sur tous les Front(s) ! :D
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://media-exp1.licdn.com/dms/image/C4D03AQFN7JMdd6BsjQ/profile-displayphoto-shrink_400_400/0/1550840608493?e=1633564800&v=beta&t=2HroTWMk7Vctvo6WtjtUYtvRGqfL6jKzLjZ7Kea9KV8'
              }
              alt={'Alexandre Chochois'}
              mb={2}
            />
            <Link href="https://www.linkedin.com/in/alexandre-chochois" isExternal>
              <Text color="#0468ae" fontWeight={600}>Alexandre Chochois</Text> </Link>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
              Scrum Master et Dev Front
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Heading align={'center'} as="h1" bg={useColorModeValue('gray.50', 'gray.800')} pt="1em">Contact</Heading>
      <Flex p={5} flexWrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
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
              Intéressé par notre projet ? Envie d'en savoir plus ?
            </Text>
            <Text
              fontWeight={500}
              fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}
              textAlign={'center'}>
              N'hésitez pas à nous contacter par email : <Text
                fontWeight={700}
                fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
                textAlign={'center'}>
                contact@react-jobs.fr
              </Text>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
