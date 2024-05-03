import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="brand.900" color="white" p={3} align="center">
      <Box p="2">My Portfolio</Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2}>
          About
        </Link>
        <Link as={RouterLink} to="/portfolio" p={2}>
          Portfolio
        </Link>
        <Link as={RouterLink} to="/contact" p={2}>
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;