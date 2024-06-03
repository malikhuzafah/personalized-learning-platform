// app/auth/login/page.js
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
} from "@chakra-ui/react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      console.log(res);
      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxW="md">
      <Heading mb={6}>Login</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={formData.email} onChange={handleChange} />
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
        <Button type="submit" colorScheme="teal" width="full">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
