import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import * as routes from "./constants/routes";

function ProtectedRoute({ isAuth, component, ...rest }) {
  return (
    <Route {...rest}>
      {isAuth ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: routes.WELCOME, state: { from: props.location } }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
