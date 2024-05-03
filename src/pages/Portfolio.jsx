import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Heading as="h2" size="xl" mb={4}>Portfolio</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as="h3" size="lg">Project 1</Heading>
          <Text>Details about Project 1...</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">Project 2</Heading>
          <Text>Details about Project 2...</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Portfolio;