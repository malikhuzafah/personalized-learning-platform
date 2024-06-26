// app/courses/[id]/page.js
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";

const CourseDetails = ({ params }) => {
  const [course, setCourse] = useState(null);
  const { id } = params;

  console.log(id);

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
      console.log(res);
      setCourse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      fetchCourse();
    }
  }, [id]);

  return (
    <Container maxW="container.md">
      <Heading mb={6}>{course?.title}</Heading>
      <Text mb={4}>{course?.description}</Text>
      <Heading size="md" mb={4}>
        Modules
      </Heading>
      <List spacing={3}>
        {course?.modules.map((module, index) => (
          <ListItem key={index}>
            <Text fontWeight="bold">{module.title}</Text>
            <List spacing={2}>
              {module.lessons.map((lesson, idx) => (
                <ListItem key={idx}>{lesson}</ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CourseDetails;
