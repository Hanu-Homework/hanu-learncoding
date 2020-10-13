import React from "react";
import Discuss from "./Views/Discuss/Discuss";
import TopLearners from "./Views/TopLearner/TopLearner";
import Blog from "./Views/Blog/Blog";
import SignUp from "./Views/NewUser/Signup";
import SignIn from "./Views/NewUser/SignIn";
import Home from "./Views/Home";
import Profile from "./Views/Profile/Profile";
import Courses from "./Views/Courses/Courses";

interface IRoute {
  parentPath?: string;
  name: string;
  path: string;
  isProtected: boolean;
  component: () => JSX.Element;
  children?: IRoute[];
  child?: IRoute;
  media: {
    icon: string;
  };
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
    media: {
      icon: "",
    },
  },
  content: [
    {
      parentPath: "/",
      name: "Courses",
      path: "/courses",
      component: () => <Courses />,
      isProtected: true,
      media: {
        icon: "",
      },
    },
    {
      parentPath: "/",
      name: "Compete",
      path: "/compete",
      component: () => <div></div>,
      isProtected: true,
      media: {
        icon: "",
      },
    },
    {
      parentPath: "/",
      name: "Discuss",
      path: "/discuss",
      component: () => <Discuss />,
      isProtected: true,
      media: {
        icon: "",
      },
    },
    {
      parentPath: "/",
      name: "Top Learners",
      path: "/leaderboard",
      component: () => <TopLearners />,
      isProtected: true,
      media: {
        icon: "",
      },
    },
    {
      parentPath: "/",
      name: "Blog",
      path: "/blog",
      component: () => <Blog />,
      isProtected: false,
      media: {
        icon: "",
      },
    },
  ],
  auth: {
    signIn: {
      parentPath: "/",
      name: "Sign In",
      path: "/signin",
      component: () => <SignIn />,
      isProtected: false,
      media: {
        icon: "",
      },
    },
    signUp: {
      parentPath: "/",
      name: "Sign Up",
      path: "/signup",
      component: () => <SignUp />,
      isProtected: false,
      media: {
        icon: "",
      },
    },
    profile: {
      parentPath: "/",
      name: "Profile",
      path: "/profile",
      component: () => <Profile />,
      isProtected: true,
      media: {
        icon: "",
      },
    },
  },
};

export default routeTree;
