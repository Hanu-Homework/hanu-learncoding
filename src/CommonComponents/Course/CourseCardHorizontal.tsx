import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import Course from "../../models/course/course";

type Props = {
  course: Course;
};

const CourseCardHorizontal: React.FC<Props> = ({ course }) => {
  return (
    <Paper style={{ padding: 30, borderRadius: 16 }}>
      <Grid container spacing={3}>
        <Grid container item lg={3}>
          <img
            src="https://www.sololearn.com/Icons/Courses/1073.png"
            alt="Python"
            style={{ borderRadius: "50%", height: 100 }}
          />
        </Grid>
        <Grid container item lg={9}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {course.name}
          </Typography>
          <Box mb={5} />
          <Typography variant="body1">{course.shortDescription}</Typography>
        </Grid>
      </Grid>
      <Box mb={3} />
      <Grid container justify="flex-end">
        <Button
          style={{ padding: "10px 40px", borderRadius: 50 }}
          color="primary"
          variant="contained"
          href={`/courses/${course.id}`}
        >
          <Typography style={{ fontWeight: "lighter", textTransform: "none" }}>
            More
          </Typography>
        </Button>
      </Grid>
      <Box mb={2} />
      <Divider />
      <Box mb={2} />
      <Grid container spacing={3} justify="center">
        <Grid container item xs={3}>
          <div>
            <Typography style={{ fontWeight: "lighter", color: "grey" }}>
              Learners
            </Typography>
            <Typography
              color="primary"
              style={{ fontWeight: "bold", fontSize: "130%" }}
            >
              {course.numberOfLearners}
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={3}>
          <div>
            <Typography style={{ fontWeight: "lighter", color: "grey" }}>
              Lessons
            </Typography>
            <Typography
              color="primary"
              style={{ fontWeight: "bold", fontSize: "130%" }}
            >
              {course.numberOfLessons}
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={3}>
          <div>
            <Typography style={{ fontWeight: "lighter", color: "grey" }}>
              Quizzes
            </Typography>
            <Typography
              color="primary"
              style={{ fontWeight: "bold", fontSize: "130%" }}
            >
              {course.numberOfQuizzes}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseCardHorizontal;
