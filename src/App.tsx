import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Blog from "./Views/Blog/Blog";
import Courses from "./Views/Courses/Courses";
import Discuss from "./Views/Discuss/Discuss";
import Home from "./Views/Home";
import SignIn from "./Views/NewUser/SignIn";
import Signup from "./Views/NewUser/Signup";
import Profile from "./Views/Profile/Profile";
import TopLearner from "./Views/TopLearner/TopLearner";
import DesktopAppBar from "./Components/AppBarDesktop";

const App: React.FC<any> = () => {
  return (
    <Router>
      <DesktopAppBar />
      <React.Fragment>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/discuss">
            <Discuss />
          </Route>
          <Route path="/top-learner">
            <TopLearner />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
