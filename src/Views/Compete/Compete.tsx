import { Container, Grid } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";
import CompeteHistory from "./CompeteHistory";
import LeaderBoard from "./LeaderBoard";

type Props = PropsFromRedux & {};

const Compete: React.FC<Props> = ({}) => {
  return (
    <Container>
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

export default connector(Compete);
