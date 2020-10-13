import { Grid } from "@material-ui/core";
import React from "react";

interface Props {}

const CourseContent: React.FC<Props> = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={12} lg={8}></Grid>
        <Grid container item xs={12} md={12} lg={4}></Grid>
      </Grid>
    </div>
  );
};

export default CourseContent;
