import { Box, Button, Container, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Box as="form" display="flex" flexDirection="column" gap={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Your Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="blue" type="submit">Send Message</Button>
      </Box>
    </Container>
  );
};

export default Contact;