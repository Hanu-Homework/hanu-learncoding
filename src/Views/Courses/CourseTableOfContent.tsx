import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Course from "../../models/course/course";

interface Props {
  course: Course;
}

const CourseTableOfContent: React.FC<Props> = ({ course }) => {
  return (
    <Paper>
      <div style={{ display: "flex" }}>
        <Typography>Lesson</Typography>
        <Typography>271 Quizzed</Typography>
      </div>
    </Paper>
  );
};

export default CourseTableOfContent;
