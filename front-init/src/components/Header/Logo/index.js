import React from 'react'
import { Link as ReactLink } from 'react-router-dom';

import logo from "src/assets/Logo validé-Job Board.png"

import { Image, Box, Link } from "@chakra-ui/react"

export default function Logo() {
  return (
    <Box boxSize="11em" ml="4" mt="1">
      <Link as={ReactLink} to='/'>
        <Image src={logo} alt="Logo React-jobs.fr" />
      </Link>
    </Box>
  )
};
