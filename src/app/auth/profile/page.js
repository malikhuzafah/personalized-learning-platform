// app/profile/page.js
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Container, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container maxW="md">
      <Heading mb={6}>Profile</Heading>
      <Text>
        <strong>Name:</strong> {profile.name}
      </Text>
      <Text>
        <strong>Email:</strong> {profile.email}
      </Text>
    </Container>
  );
};

export default Profile;
