import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}: {
  component: any;
  handleChildFunc: any;
}) => {
  const user = "token from cookie";
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? (
          <Component {...props} user={user} handleChildFunc={handleChildFunc} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
