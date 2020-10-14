import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import DetailedInformation from "./DetailedInformation";
import ShortIntroduction from "./ShortIntroduction";
// import currentUser from "../../fakeData/currentUser";

function Profile() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={7}>
        <Grid container item xs={12} md={4} lg={4}>
          {/* <ShortIntroduction user={currentUser} isSelf={true} /> */}
        </Grid>
        <Grid container item xs={12} md={8} lg={8}>
          {/* <DetailedInformation user={currentUser} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Profile;
