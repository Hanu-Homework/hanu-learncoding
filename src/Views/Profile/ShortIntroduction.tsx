import { Paper } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import User from "../../models/user/user";
import { RootState } from "../../redux/reducers";

type Props = PropsFromRedux & {
  user: User;
  isSelf: boolean;
};

const ProfileShortIntroduction: React.FC<Props> = ({ user, isSelf }) => {
  return (
    <div>
      <img
        src={user.mediaSrc.avatar}
        alt={user.name}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <Paper
        style={{ padding: "25px", borderRadius: 16, width: "100%" }}
      ></Paper>
    </div>
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

export default connector(ProfileShortIntroduction);
