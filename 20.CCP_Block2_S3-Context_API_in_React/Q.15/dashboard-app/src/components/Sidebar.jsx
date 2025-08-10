import React, { useContext, useState } from 'react';
import { Box, Text, VStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { AuthContext } from '../AuthContext';
import { ThemeContext } from '../ThemeContext';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Sidebar() {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  // For collapsible sidebar on small screens
  const [isOpen, setIsOpen] = useState(true);
  
  // Hide or show sidebar based on breakpoint
  const isSidebarVisible = useBreakpointValue({ base: isOpen, md: true });

  return (
    <>
      {/* Toggle button for small screens */}
      <IconButton
        aria-label="Toggle Sidebar"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={() => setIsOpen(!isOpen)}
        m={2}
      />

      {isSidebarVisible && (
        <Box
          as="aside"
          bg={theme === 'light' ? 'gray.200' : 'gray.700'}
          color={theme === 'light' ? 'black' : 'white'}
          minW={{ base: 'full', md: '250px' }}
          height="calc(100vh - 64px)"  // Navbar is about 64px tall
          p="1.5rem"
          position={{ base: 'static', md: 'sticky' }}
          top="64px"
          overflowY="auto"
        >
          <VStack spacing="1rem" align="start">
            {isLoggedIn ? (
              <Text fontWeight="bold" fontSize="lg">Welcome back!</Text>
            ) : (
              <Text>Please log in to see more.</Text>
            )}
            {/* Additional sidebar links or content could be added here */}
          </VStack>
        </Box>
      )}
    </>
  );
}

export default Sidebar;
