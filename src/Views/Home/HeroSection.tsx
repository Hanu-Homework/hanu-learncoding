import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

interface Props {}

const HeroHeader: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        padding: "25px",
        height: "90vh",
      }}
    >
      <div>
        <Typography
          variant="h3"
          style={{ marginBottom: "25px", fontWeight: "bold" }}
        >
          An engaging learn-coding platform for everyone
        </Typography>
        <Typography style={{ marginBottom: "50px" }}>
          Develop your skillset and compete with other learners
        </Typography>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "auto",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 40px" }}
          >
            Sign up today
          </Button>
          <Box mr={3} />
          <Button style={{ padding: "10px 40px" }}>View our courses</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
