"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    console.log("handle submit");
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/signup", formData);
      router.push("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container centerContent>
      <Box
        p={8}
        maxW="md"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        mt={12}
      >
        <Heading mb={6} textAlign="center">
          Signup
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            borderRadius="full"
            mb={4}
          >
            Signup
          </Button>
          <Text textAlign="center">
            Already have an account?{" "}
            <Link color="teal.500" href="/auth/login">
              Login
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
