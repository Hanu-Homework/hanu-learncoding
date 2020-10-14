import { Paper, Typography } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import User from "../../models/user/user";
import { RootState } from "../../redux/reducers";

type Props = PropsFromRedux & {
  user: User;
};

const ProfileDetailedInformation: React.FC<Props> = ({ user }) => {
  return (
    <Paper style={{ padding: "30px", borderRadius: 16, width: "100%" }}>
      <Typography variant="h5">{user.name}</Typography>
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

export default connector(ProfileDetailedInformation);
