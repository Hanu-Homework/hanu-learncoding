import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Course from "../../models/course/course";

interface Props {
  course: Course;
}

const CourseDescriptionCard: React.FC<Props> = ({ course }) => {
  return (
    <Paper style={{ borderRadius: 16, padding: "25px" }}>
      <div style={{ display: "flex" }}>
        <img
          src={course.mediaSrc.icon}
          alt={course.name}
          style={{
            height: "100px",
            objectFit: "cover",
            borderRadius: 50,
            marginRight: "25px",
          }}
        />
        <div>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            {course.name}
          </Typography>
          <Typography variant="body1">{course.shortDescription}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default CourseDescriptionCard;
