import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { ThemeContext } from '../ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      bg={theme === 'light' ? 'gray.100' : 'gray.900'}
      color={theme === 'light' ? 'black' : 'white'}
      textAlign="center"
      p="1rem"
      position="sticky"
      bottom="0"
      width="100%"
      boxShadow="inner"
    >
      © 2025 Your Dashboard — All rights reserved.
    </Box>
  );
}

export default Footer;
