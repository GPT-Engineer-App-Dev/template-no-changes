import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Heading as="h2" size="xl" mb={4}>About Me</Heading>
      <Text fontSize="lg">
        I am a passionate and dedicated professional with a keen interest in web development and design. With years of experience in the industry, I strive to create beautiful, user-friendly digital experiences.
      </Text>
    </Container>
  );
};

export default About;