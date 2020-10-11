import { Grid } from "@material-ui/core";
import React from "react";
import fakeCourses from "../../fakeData/courses";
import CourseCardHorizontal from "./CourseCardHorizontal";

const CoursesGrid: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {fakeCourses.map((course) => {
        return (
          <Grid container item xs={12} md={12} lg={6}>
            <CourseCardHorizontal course={course} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CoursesGrid;
