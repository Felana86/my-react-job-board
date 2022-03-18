import React from 'react';

import { Twemoji } from 'react-emoji-render';
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function TaglineBlock() {
  return (
    <Flex
      position="relative"
      w="100%"
      h={useBreakpointValue({ base: "15em", md: "20em" })}
      background="linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(https://images.pexels.com/photos/5244017/pexels-photo-5244017.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)"
      backgroundSize={'cover'}
      backgroundPosition="60% 38%"
      pb="1em"
    >
      <VStack
        position="absolute"
        bottom="6"
        w="100%"
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={2}>
          <Text
            textShadow="2px 2px 5px #000000"
            color={'#F7FAFC'}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Les hooks n'ont plus de secret pour toi ?
          </Text>
          <Stack direction={'row'} display="flex">
            <Text display="flex" flexWrap="wrap"
              textShadow="2px 2px 5px #000000"
              color={'#F7FAFC'}
              fontWeight={300}
              lineHeight={1}
              mr={4}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>Consulte les offres React les plus récentes en France
              <Twemoji className="twemoji" text="🇫🇷" />
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
