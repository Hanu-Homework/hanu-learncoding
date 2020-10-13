import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import HotNewsCard from "../../CommonComponents/SideBar/HotNews";
import ForumTable from "./ForumTable";

function Discuss() {
  return (
    <Container maxWidth="lg">
      <Box mb={5} />
      <Grid container spacing={10}>
        <Grid container item xs={12} md={7} lg={7}>
          <ForumTable />
        </Grid>
        <Grid container item xs={12} md={1} lg={1} />
        <Grid container item xs={12} md={4} lg={4}>
          <HotNewsCard />
        </Grid>
      </Grid>
      <Box mb={5} />
    </Container>
  );
}

export default Discuss;
