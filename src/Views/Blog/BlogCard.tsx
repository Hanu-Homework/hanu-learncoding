import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Blog from "../../models/blog/blog";

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Card elevation={4} style={{ borderRadius: 16 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://api.sololearn.com/Uploads/The_Influence_of_Data_Science_in_Elections__Blog_1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{ padding: "25px" }}>
          <Grid container>
            <Grid container item xs={6} justify="flex-start">
              <Typography color="primary" variant="subtitle2">
                {blog.postedAt.toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <Typography variant="subtitle2">
                {blog.approximatedReadingTime} minutes read
              </Typography>
            </Grid>
          </Grid>
          <Box mb={2} />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontWeight: "bold" }}
          >
            {blog.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
