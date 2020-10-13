import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseLanding from "./Landing";

const Courses: React.FC = () => {
  const match = useRouteMatch();

  return (
    <Container maxWidth="lg">
      <Switch>
        <Route path={`${match.path}/:courseID`}></Route>
        <Route path={match.path}>
          <CourseLanding />
        </Route>
      </Switch>
    </Container>
  );
};

export default Courses;
