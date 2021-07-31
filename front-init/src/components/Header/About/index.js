import React from 'react';

import { Avatar, Box, Stack, Text, useColorModeValue, Flex } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex p={10} wrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
    <Stack
      m="0.5em"
      w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Caroline Wiese</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Lead dev Back
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
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Alexandre Chochois</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Scrum Master et dev Front
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
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Florian Brun-Buisson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Lead dev Front
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
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Felana Letrange</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Git Master et dev Back
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
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Florian Delobelle</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Product Owner et dev Front
        </Text>
      </Box>
    </Stack>
    </Flex>
  );
}
