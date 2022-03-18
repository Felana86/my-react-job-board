import React, { useState } from 'react';

import { FiArrowUpCircle } from 'react-icons/fi';
import { Button } from "@chakra-ui/react"

const BackTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button
      position="fixed"
      right="2.5%"
      bottom="50px"
      h="0px"
      fontSize="3rem"
      zIndex={1}
      color="#0468ae"
      _focus={{
      outline: "none"
      }}
    >
    <FiArrowUpCircle onClick={scrollToTop} 
      style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default BackTopButton;
