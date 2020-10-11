import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Course from "../../models/course/course";

const useStyles = makeStyles({
  root: {},
  paddingHorizontally: {
    padding: "0 25px",
  },
});

type Props = {
  course: Course;
};

const CourseCardVertical: React.FC<Props> = ({ course }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ borderRadius: 16 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={course.name}
          height="250"
          color="primary"
          image={course.mediaSrc.image}
          title={course.name}
        />
        <CardContent
          className={classes.paddingHorizontally}
          style={{ margin: "20px 10px" }}
        >
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {course.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {course.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{ margin: "auto", marginBottom: "20px" }}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            style={{ borderRadius: 50, padding: "10px 30px" }}
          >
            <Typography>Take This Course</Typography>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CourseCardVertical;
