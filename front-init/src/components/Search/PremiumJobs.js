import React from 'react';

import "./style.css";

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Twemoji } from 'react-emoji-render';
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
  VStack,
  useColorModeValue,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';

export default function PremiumJobs({ premiumJobs }) {

  return (
    <VStack p={1} bg={useColorModeValue('gray.50', 'gray.800')} spacing={4}>
      <Accordion width={useBreakpointValue({ base: "80%", md: "60%" })} allowToggle bg="#fcf5eb" >
        <AccordionItem pt="2" pb="2"
          _hover={{
            boxShadow: 'lg',
            borderLeftWidth: '2px',
            borderLeftColor: 'blue.500'
          }}
        >
          <AccordionButton>
            <Twemoji className="twemoji" text="⭐" />
            <Box flex="1" textAlign="left">
              <Heading as="h2" size={useBreakpointValue({ base: "xs", md: "sm" })}>{(premiumJobs.title).toUpperCase()}
              </Heading>
            </Box>
            <Badge display={useBreakpointValue({ base: "none", md: "sm" })} size={useBreakpointValue({ base: "xs", md: "sm" })} ml="1" colorScheme="">{premiumJobs.locality}</Badge>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex justifyContent="space-between">
              <Heading display="flex" as="h3" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{premiumJobs.company}</Heading>
              <Heading display="flex" as="h2" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{premiumJobs.contract}</Heading>
            </Flex>
            <br />
            <Text fontSize={useBreakpointValue({ base: "sm", md: "md" })} as="p">{premiumJobs.description}
            </Text>
            <br />
            <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p">{premiumJobs.locality}</Text>
            <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p"> {premiumJobs.salary}</Text>
            <Flex justifyContent="flex-end">
              <Link fontSize={useBreakpointValue({ base: "sm", md: "md" })} href="https://oclock.io/team" isExternal><Button color="#0468ae" rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
