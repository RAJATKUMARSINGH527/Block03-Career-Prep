import React, { useContext } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { ThemeContext } from '../ThemeContext';

const sampleProducts = [
  "Product A", "Product B", "Product C",
  "Product D", "Product E", "Product F",
];

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <Box flex="1" p="4" overflowY="auto" minHeight="calc(100vh - 128px)">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {sampleProducts.map((product) => (
          <Box
            key={product}
            p="4"
            boxShadow="md"
            borderRadius="md"
            bg={theme === 'light' ? 'white' : 'gray.600'}
            color={theme === 'light' ? 'black' : 'white'}
          >
            <Text fontWeight="bold">{product}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Main;
