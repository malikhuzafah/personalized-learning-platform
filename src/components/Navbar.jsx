// components/Navbar.js
import React from "react";
import Link from "next/link";
import { Box, Flex, Button, Heading } from "@chakra-ui/react";

const Navbar = () => (
  <Box bg="teal.500" p={4} color="white">
    <Flex maxW="container.xl" mx="auto" align="center" justify="space-between">
      <Heading as="h1" size="lg">
        <Link href="/">Personalized Learning Platform</Link>
      </Heading>
      <Flex>
        <Button as={Link} href="/auth/login" variant="ghost" colorScheme="teal">
          Login
        </Button>
        <Button
          as={Link}
          href="/auth/signup"
          variant="ghost"
          colorScheme="teal"
        >
          Signup
        </Button>
        <Button as={Link} href="/profile" variant="ghost" colorScheme="teal">
          Profile
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
