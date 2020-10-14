import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import HotNewsCard from "../../CommonComponents/SideBar/HotNews";
import fakeCourses from "../../fakeData/courses";
import CourseDescriptionCard from "./CourseDescriptionCard";
import CourseTableOfContent from "./CourseTableOfContent";

interface Params {
  courseID: string;
}

const CoursePreview: React.FC = () => {
  const { courseID } = useParams<Params>();
  const course = fakeCourses.find((c) => c.id === courseID);

  if (!course) return <Typography>404 Not Found</Typography>;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={12} lg={8}>
          <CourseDescriptionCard course={course} />
          <CourseTableOfContent course={course} />
        </Grid>
        <Grid container item xs={12} md={12} lg={4}>
          <HotNewsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default CoursePreview;
