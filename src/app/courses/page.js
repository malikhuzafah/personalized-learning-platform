// app/courses/page.js
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import CourseCard from "@/components/Courses/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container maxW="container.xl">
      <Heading mb={6}>Courses</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Courses;
