import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import fakeBlogs from "../../fakeData/blogs";
import BlogCard from "./BlogCard";

function Blog() {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box mb={5} />
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Blog
      </Typography>
      <Box mb={5} />
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="fullWidth"
      >
        <Tab label="All" />
        <Tab label="Learn To Code" />
        <Tab label="Career Development" />
        <Tab label="Insights" />
        <Tab label="Company News" />
      </Tabs>
      <Box mb={2} />
      <Grid container spacing={3}>
        {fakeBlogs.map((blog) => {
          return (
            <Grid container item xs={12} md={6} lg={4}>
              <BlogCard blog={blog} />
            </Grid>
          );
        })}
      </Grid>
      <Box mb={5} />
      <div style={{ display: "flex" }}>
        <Button
          variant="outlined"
          color="primary"
          style={{ padding: "10px 30px", borderRadius: 16, margin: "auto" }}
        >
          <Typography>Load More</Typography>
        </Button>
      </div>
      <Box mb={5} />
    </Container>
  );
}

export default Blog;
