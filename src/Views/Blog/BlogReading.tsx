import { Container, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import fakeBlogs from "../../fakeData/blogs";
import Blog from "../../models/blog/blog";

interface Props {}

interface Params {
  blogID: string;
}

const BlogReading: React.FC<Props> = () => {
  let { blogID } = useParams<Params>();

  const blog: Blog | undefined = fakeBlogs.find((blog) => blog.id === blogID);

  if (!blog) return <Typography>404 Not Found</Typography>;

  return (
    <div style={{ display: "flex", marginTop: "50px", marginBottom: "80px" }}>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", fontWeight: "bold" }}
        >
          Blog
        </Typography>
        <img
          src={blog.media.desImgSrc}
          alt={blog.title}
          style={{
            width: "50vw",
            borderRadius: 50,
            margin: "auto",
            objectFit: "cover",
          }}
        />

        <Typography color="primary" style={{ marginTop: 50, marginBottom: 20 }}>
          {blog.postedAt.toDateString()}
        </Typography>
        <Typography
          variant="h3"
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            marginBottom: "50px",
          }}
        >
          {blog.title} + "vuevuevuevuevue" asdf asdfkjhasd dsafjh asfdhj
        </Typography>
        <Container maxWidth="md">
          {blog.content.paragraphs.map((paragraph) => {
            return (
              <Typography
                style={{
                  textAlign: "start",
                  marginBottom: "15px",
                  fontSize: paragraph.isHeader ? "130%" : "110%",
                  fontWeight: paragraph.isHeader ? "bold" : "inherit",
                }}
              >
                {paragraph.value}
              </Typography>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default BlogReading;
