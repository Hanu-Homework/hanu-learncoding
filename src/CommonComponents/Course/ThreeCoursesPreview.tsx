import { Grid } from "@material-ui/core";
import React from "react";
import fakeCourses from "../../fakeData/courses";
import CourseCardVertical from "./CourseCardVertical";

type Props = {};

const ThreeCoursesPreview: React.FC<Props> = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid container item xs={12} md={6} lg={4}>
        <CourseCardVertical course={fakeCourses[0]} />
      </Grid>
      <Grid container item xs={12} md={6} lg={4}>
        <CourseCardVertical course={fakeCourses[1]} />
      </Grid>
      <Grid container item xs={12} md={6} lg={4}>
        <CourseCardVertical course={fakeCourses[2]} />
      </Grid>
    </Grid>
  );
};

export default ThreeCoursesPreview;
