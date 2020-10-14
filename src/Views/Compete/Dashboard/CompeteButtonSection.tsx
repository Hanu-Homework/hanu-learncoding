import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  onChallengeButtonClick: () => void;
}

const CompeteButtonSection: React.FC<Props> = ({ onChallengeButtonClick }) => {
  return (
    <Paper style={{ padding: "25px", borderRadius: 16 }}>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={8} lg={8}>
          <Typography variant="h5" style={{ marginBottom: "10px" }}>
            Compete !
          </Typography>
          <Typography variant="body2">
            Sharpen your skill through various coding challenges with your
            friends or other people and climb up the leaderboard
          </Typography>
        </Grid>
        <Grid container item xs={12} md={4} lg={4} justify="center">
          <Button
            color="primary"
            variant="contained"
            onClick={onChallengeButtonClick}
            style={{ margin: "auto", padding: "10px 30px" }}
          >
            Create new challenge
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompeteButtonSection;
