import { Container } from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";
import ProtectedRoute from "../../Helpers/ProtectedRoute";
import { RootState } from "../../redux/reducers";
import CompeteBattle from "./Battle/Battle";
import CompeteDashboard from "./Dashboard/Dashboard";

type Props = PropsFromRedux & {};

const Compete: React.FC<Props> = ({ isLoggedIn }) => {
  const match = useRouteMatch();
  return (
    <Container>
      <Switch>
        <ProtectedRoute
          component={() => <CompeteBattle />}
          path={`${match.path}/:languageID`}
        />
        <ProtectedRoute
          component={() => <CompeteDashboard />}
          path={`${match.path}`}
        />
      </Switch>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {};
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Compete);
