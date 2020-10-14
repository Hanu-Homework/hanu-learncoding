import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routeTree from "../Routes";
import ResponsiveAppBar from "../CommonComponents/AppBar/AppBar";
import ControlledRoute from "../Helpers/ControlledRoute";
import { RootState } from "../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import CustomDrawer from "../CommonComponents/AppBar/Drawer";
import Footer from "../CommonComponents/Footer/Footer";
import { Box, CircularProgress } from "@material-ui/core";

type Props = PropsFromRedux & {};

const UserViews: React.FC<Props> = ({ isLoggedIn, isRedirecting }) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  return (
    <Router>
      <ResponsiveAppBar />
      <CustomDrawer />
      <React.Fragment>
        {isRedirecting ? (
          <div style={{ display: "flex", height: "90vh" }}>
            <CircularProgress style={{ margin: "auto" }} />
          </div>
        ) : (
          <div style={{ minHeight: "90vh" }}>
            <Switch>
              {routeTree.content.map((route) => {
                return <Route path={route.path}>{route.component}</Route>;
              })}
              <Route path={routeTree.auth.signIn.path}>
                {routeTree.auth.signIn.component}
              </Route>
              <Route path={routeTree.auth.signUp.path}>
                {routeTree.auth.signUp.component}
              </Route>
              <ControlledRoute
                isProtected={true}
                isProtectionPassed={isLoggedIn}
                path={routeTree.auth.profile.path}
                component={routeTree.auth.profile.component}
              />
              <Route path={routeTree.home.path}>
                {routeTree.home.component}
              </Route>
            </Switch>
          </div>
        )}
      </React.Fragment>
      <Box mb={3} />
      <Footer />
    </Router>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isRedirecting: state.ui.isRedirecting,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserViews);
