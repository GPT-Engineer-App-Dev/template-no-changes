import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Portfolio</Heading>
        <Text fontSize="xl">Explore my projects, learn about my skills, and feel free to contact me.</Text>
      </Box>
    </Container>
  );
};

export default Index;