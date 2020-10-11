import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routeTree from "./Routes";
import ResponsiveAppBar from "./CommonComponents/AppBar/AppBar";

const App: React.FC<any> = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <React.Fragment>
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
          <Route path={routeTree.auth.profile.path}>
            {routeTree.auth.profile.component}
          </Route>
          <Route path={routeTree.home.path}>{routeTree.home.component}</Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
