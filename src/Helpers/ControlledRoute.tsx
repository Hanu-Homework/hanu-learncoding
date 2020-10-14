import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IControlledRoute {
  path: string;
  component: React.FC;
  isProtected?: boolean;
  isProtectionPassed?: boolean;
  redirectPath?: string;
}

const ControlledRoute = ({
  isProtected = false,
  isProtectionPassed = false,
  path,
  component: Component,
  redirectPath = "/signin",
}: IControlledRoute) => {
  return (
    <Route
      path={path}
      render={(props) =>
        isProtected && !isProtectionPassed ? (
          <Redirect to={redirectPath} />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default ControlledRoute;
