import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/reducers";
import ControlledRoute from "./ControlledRoute";

type Props = PropsFromRedux & {
  path: string;
  component: React.FC;
};

const ProtectedRoute: React.FC<Props> = ({ isLoggedIn, path, component }) => (
  <ControlledRoute
    isProtected={true}
    isProtectionPassed={isLoggedIn}
    component={component}
    path={path}
  />
);

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProtectedRoute);
