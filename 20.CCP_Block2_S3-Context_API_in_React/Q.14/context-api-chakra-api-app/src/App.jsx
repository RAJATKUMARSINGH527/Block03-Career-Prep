import { ChakraProvider, Box, Flex, Grid, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ChakraProvider>
      {/* Navbar */}
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'gray.100' : 'gray.700'}
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth} colorScheme={isLoggedIn ? 'red' : 'green'}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme} colorScheme="blue">
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      {/* Card Grid */}
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={theme === 'light' ? 'gray.200' : 'gray.600'}
            borderRadius="md"
          >
            {card}
          </Box>
        ))}
      </Grid>

      {/* Footer */}
      <Box
        as="footer"
        p="4"
        bg={theme === 'light' ? 'gray.300' : 'gray.800'}
        color={theme === 'light' ? 'black' : 'white'}
        textAlign="center"
      >
        {isLoggedIn ? 'Welcome, User' : 'Please log in'}
      </Box>
    </ChakraProvider>
  );
}

export default App;
