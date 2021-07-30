import React from 'react'

import { HStack, Box, Spacer, Button } from "@chakra-ui/react"

const Pagination = ({ jobsPerPage, totalJobs, paginate } ) => {

const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
  pageNumbers.push(i);
}

return (
<HStack spacing="3em" padding="1em">
    {pageNumbers.map(number => (
      <>
      <Box w="1em" key={number}>
      <a onClick={() => paginate(number)} ><Button>{number}</Button></a>
      </Box>
      </>
    ))}
</HStack>
)

}

export default Pagination
