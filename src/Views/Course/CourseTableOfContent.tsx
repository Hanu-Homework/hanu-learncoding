import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Fragment as div } from "react";
import Course from "../../models/course/course";
import CourseModule from "../../models/course/module";

interface Props {
  course: Course;
}

const CourseTableOfContent: React.FC<Props> = ({ course }) => {
  return (
    <Paper
      style={{
        borderRadius: 16,
        padding: "25px",
        marginTop: "25px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: "25px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Lesson</Typography>
        <Typography>{course.numberOfLessons} Quizzed</Typography>
      </div>
      {course.modules.map((module, moduleIndex) => {
        return <ModuleTree courseModule={module} moduleIndex={moduleIndex} />;
      })}
    </Paper>
  );
};

interface IModuleTree {
  courseModule: CourseModule;
  moduleIndex: number;
}

const ModuleTree: React.FC<IModuleTree> = ({ courseModule, moduleIndex }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          padding: "16px",
          borderRadius: 10,
          backgroundColor: "#eeeeee",
          marginBottom: "16px",
        }}
      >
        <Typography component="span">Module {moduleIndex + 1}: </Typography>
        <Typography component="span">{courseModule.name}</Typography>
      </div>
      <List dense>
        {courseModule.lessons.map((lesson, index) => {
          return (
            <ListItem button>
              <ListItemIcon>{index + 1}</ListItemIcon>
              <ListItemText
                primary={lesson.name}
                style={{ fontWeight: "bold" }}
              />
              <ListItemSecondaryAction>
                <div
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#eeeeee",
                    padding: "3px 30px",
                  }}
                >
                  {lesson.numberOfQuizzes}
                </div>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default CourseTableOfContent;
