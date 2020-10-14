import { Paper, Typography } from "@material-ui/core";
import React, { Dispatch, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";

type Props = PropsFromRedux & {};

const LeaderBoardCard: React.FC<Props> = () => {
  return (
    <Fragment>
      <Paper style={{ borderRadius: 16, padding: "25px", width: "100%" }}>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginBottom: "25px" }}
        >
          Leaderboard
        </Typography>
      </Paper>
    </Fragment>
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

export default connector(LeaderBoardCard);
