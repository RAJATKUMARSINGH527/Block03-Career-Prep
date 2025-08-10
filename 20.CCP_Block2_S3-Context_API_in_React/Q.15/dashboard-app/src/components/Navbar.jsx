import React, { useContext } from 'react';
import { Flex, Spacer, Button, Text} from '@chakra-ui/react';
import { AuthContext } from '../AuthContext';
import { ThemeContext } from '../ThemeContext';

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      as="nav"
      padding="1rem 2rem"
      alignItems="center"
      bg={theme === 'light' ? 'gray.100' : 'gray.800'}
      color={theme === 'light' ? 'black' : 'white'}
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="md"
    >
      <Text fontWeight="bold" fontSize="xl">Dashboard</Text>
      <Spacer />
      <Text mr="4">Status: {isLoggedIn ? "Logged In" : "Logged Out"}</Text>
      <Button onClick={toggleTheme}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </Flex>
  );
}

export default Navbar;
