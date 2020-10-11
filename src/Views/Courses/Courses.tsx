import { Container } from "@material-ui/core";
import React from "react";
import CoursesGrid from "../../CommonComponents/Course/CoursesGrid";

function Courses() {
  return (
    <Container maxWidth="lg">
      <CoursesGrid />
    </Container>
  );
}

export default Courses;
