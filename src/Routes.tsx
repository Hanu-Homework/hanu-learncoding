import React from "react";
import Courses from "./Views/Courses/Courses";
import Discuss from "./Views/Discuss/Discuss";
import TopLearners from "./Views/TopLearner/TopLearner";
import Blog from "./Views/Blog/Blog";
import SignUp from "./Views/NewUser/Signup";
import SignIn from "./Views/NewUser/SignIn";
import Home from "./Views/Home";
import Profile from "./Views/Profile/Profile";

interface IRoute {
  parentPath?: string;
  name: string;
  path: string;
  isProtected: boolean;
  component: () => JSX.Element;
  children?: IRoute[];
  child?: IRoute;
}

interface IRouteTree {
  home: IRoute;
  content: IRoute[];
  auth: {
    signIn: IRoute;
    signUp: IRoute;
    profile: IRoute;
  };
}

const routeTree: IRouteTree = {
  home: {
    parentPath: "/",
    name: "Home",
    path: "/",
    isProtected: false,
    component: () => <Home />,
  },
  content: [
    {
      parentPath: "/",
      name: "Courses",
      path: "/courses",
      component: () => <Courses />,
      isProtected: true,
    },
    {
      parentPath: "/",
      name: "Discuss",
      path: "/discuss",
      component: () => <Discuss />,
      isProtected: true,
    },
    {
      parentPath: "/",
      name: "Top Learners",
      path: "/top-learners",
      component: () => <TopLearners />,
      isProtected: true,
    },
    {
      parentPath: "/",
      name: "Blog",
      path: "/blog",
      component: () => <Blog />,
      isProtected: false,
    },
  ],
  auth: {
    signIn: {
      parentPath: "/",
      name: "Sign In",
      path: "/signin",
      component: () => <SignIn />,
      isProtected: false,
    },
    signUp: {
      parentPath: "/",
      name: "Sign Up",
      path: "/signup",
      component: () => <SignUp />,
      isProtected: false,
    },
    profile: {
      parentPath: "/",
      name: "Profile",
      path: "/profile",
      component: () => <Profile />,
      isProtected: true,
    },
  },
};

export default routeTree;
