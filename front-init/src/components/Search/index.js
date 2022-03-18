import React from 'react';
import { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import {
  Input,
  VStack,
  InputLeftElement,
  InputGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Job from './Job';
import PremiumJobs from './PremiumJobs';

export default function Search({ jobs }) {
  const perPage = 5;
  const [premiumJobs, setPremiumJobs] = useState([]);
  const [allJobs, setAllJobs] = useState(jobs.slice(0, perPage));
  const [hasMore, setHasMore] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [lastPosition, setLastPosition] = useState(perPage);

  useEffect(() => {
    fetch('http://18.212.203.228:5050' + '/jobs')

      .then(data => {
        // console.log("1er console log de data PremiumJobs",data);
        return data.json();
      })
      .then(data => {
        // console.log("2eme console log de data PremiumJobs",data);
        setPremiumJobs(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  const fetchMoreData = () => {
    setHasMore(true)
    setAllJobs((prev) => [...prev, ...jobs.slice(lastPosition, lastPosition + perPage)]);

    setLastPosition(lastPosition + perPage);
  };

  return (
    <>
      <VStack spacing="10px" justify="center" p={5} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Text mt="2em" color="gray.500">Rechercher une ville, une technologie, un type de contrat...</Text>
        <InputGroup maxWidth="500px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            boxShadow="rgb(0 0 0 / 5%) 0 10px 15px"
            type="text"
            onChange={handleSearchTerm}
            variant="outline"
            placeholder="Ex : Bordeaux, Redux, CDI"
            size="lg"
            bg="white"
            mb="1.5em"
          />
        </InputGroup>
      </VStack>
      <VStack spacing="10px" justify="center" p={5} bg={useColorModeValue('gray.50', 'gray.800')}></VStack>
      {premiumJobs.map((val) => {
        return (<PremiumJobs premiumJobs={val} key={val.id} />
        )
      })}
      <VStack spacing="0.5em" justify="center" p={5} bg={useColorModeValue('gray.50', 'gray.800')}></VStack>
      <InfiniteScroll
        dataLength={allJobs}
        next={fetchMoreData}
        hasMore={setHasMore}
      >

        {allJobs
          .filter(val =>
            val.description.toLowerCase().includes(searchTerm.toLowerCase())
            || val.intitule.toLowerCase().includes(searchTerm.toLowerCase())
            || val.typeContrat.toLowerCase().includes(searchTerm.toLowerCase())
            || val.lieuTravail.libelle.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((val) => {
            return (
              <Job key={val.id} val={val}
              />
            );
          })}

      </InfiniteScroll>
      <VStack spacing="0.5em" justify="center" p={5} bg={useColorModeValue('gray.50', 'gray.800')}></VStack>
    </>
  );
}
