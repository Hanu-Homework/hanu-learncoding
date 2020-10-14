import { Box, Container, Grid } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/reducers";
import ChooseLanguageDialog from "./ChooseLanguageDialog";
import CompeteButtonSection from "./CompeteButtonSection";
import CompeteHistory from "./CompeteHistory";
import LeaderBoard from "./LeaderBoard";

type Props = PropsFromRedux & {};

const CompeteDashboard: React.FC<Props> = () => {
  const [
    isChooseLangugeDialogOpen,
    setChooseLanguageDialogOpen,
  ] = React.useState<boolean>(false);

  return (
    <Container>
      <CompeteButtonSection
        onChallengeButtonClick={() => {
          setChooseLanguageDialogOpen(true);
        }}
      />
      <ChooseLanguageDialog
        open={isChooseLangugeDialogOpen}
        handleClose={() => {
          setChooseLanguageDialogOpen(false);
        }}
      />
      <Box mb={5} />
      <Grid container spacing={3}>
        <Grid container item xs={12} md={12} lg={8}>
          <CompeteHistory />
        </Grid>
        <Grid container item xs={12} md={12} lg={4}>
          <LeaderBoard />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {};
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CompeteDashboard);
