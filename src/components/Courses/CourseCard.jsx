// components/CourseCard.js
import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const CourseCard = ({ course }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
    <Heading size="md" mb={2}>
      {course.title}
    </Heading>
    <Text mb={4}>{course.description}</Text>
    <Button as={Link} href={`/courses/${course._id}`} colorScheme="teal">
      View Course
    </Button>
  </Box>
);

export default CourseCard;
