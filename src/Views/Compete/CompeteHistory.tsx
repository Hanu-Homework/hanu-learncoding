import { Paper } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";

type Props = PropsFromRedux & {};

const CompeteHistory: React.FC<Props> = ({}) => {
  return (
    <Paper style={{ width: "100%", padding: "25px", borderRadius: 16 }}>
      <div style={{ display: "flex" }}></div>
    </Paper>
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

export default connector(CompeteHistory);
