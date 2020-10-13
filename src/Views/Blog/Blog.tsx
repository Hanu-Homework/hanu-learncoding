import { Container } from "@material-ui/core";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import React from "react";
import BlogLanding from "./Landing";
import BlogReading from "./BlogReading";

function Blog() {
  const match = useRouteMatch();

  return (
    <Container maxWidth="lg">
      <Switch>
        <Route path={`${match.path}/:blogID`}>
          <BlogReading />
        </Route>
        <Route path={match.path}>
          <BlogLanding />
        </Route>
      </Switch>
    </Container>
  );
}

export default Blog;
