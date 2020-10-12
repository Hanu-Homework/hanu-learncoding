import { Container } from "@material-ui/core";
import React from "react";
import LeaderBoard from "./LeaderBoard";

interface Props {}

const TopLearners: React.FC<Props> = () => {
  return (
    <Container maxWidth="lg">
      <LeaderBoard />
    </Container>
  );
};

export default TopLearners;
