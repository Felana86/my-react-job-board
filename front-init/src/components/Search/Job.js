import React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Heading,
  Box,
  Badge,
  Button,
  Text,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  useBreakpointValue,
  VStack,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react';

export default function Job({ val }) {

  return (
    <>
      <VStack p={1} bg={useColorModeValue('gray.50', 'gray.800')} spacing={4} divider={<StackDivider color="gray.50" align="stretch" />}>
        <Accordion bg="white" width={useBreakpointValue({ base: "80%", md: "60%" })} allowToggle >
          <AccordionItem pt="2" pb="2"
            _hover={{
              boxShadow: 'lg',
              borderLeftWidth: '2px',
              borderLeftColor: 'blue.500'
            }}
          >
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h2" size={useBreakpointValue({ base: "xs", md: "sm" })}>{(val.intitule).toUpperCase()}</Heading>
              </Box>
              <Badge display={useBreakpointValue({ base: "none", md: "sm" })} size={useBreakpointValue({ base: "xs", md: "sm" })} ml="1" colorScheme="">{val.lieuTravail.libelle}</Badge>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex justifyContent="space-between">
                <Heading display="flex" as="h3" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{val.entreprise.nom}</Heading>
                <Heading display="flex" as="h2" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{val.typeContrat}</Heading>
              </Flex>
              <br />
              <Text noOfLines={[3, 4, 6]} fontSize={useBreakpointValue({ base: "sm", md: "md" })} as="p">{val.description}</Text>
              <br />
              <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p">{val.lieuTravail.libelle}</Text>
              <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p">Publié le : {dayjs(val.dateCreation).locale('fr').format('dddd DD MMMM YYYY')} </Text>
              <Flex justifyContent="flex-end">
                <Link fontSize={useBreakpointValue({ base: "sm", md: "md" })} href={val.origineOffre.partenaires && val.origineOffre.partenaires[0].url ? val.origineOffre.partenaires[0].url : val.origineOffre.urlOrigine} isExternal><Button color="#0468ae" rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
}

