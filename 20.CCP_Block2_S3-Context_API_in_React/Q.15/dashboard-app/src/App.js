import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      <Navbar />

      <Flex flex="1" overflow="hidden" bg="gray.50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Box flex="1" overflow="auto">
          <Main />
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default App;
