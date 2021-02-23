/* eslint-disable no-unused-expressions */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks";

const Router = ({ isPrivate = false, component: Component, ...rest }) => {
  const {
    data: { token },
  } = useAuth();
  console.log("token", token);

  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }

  // if (token && !isPrivate) {
  //   return <Redirect to="/" />;
  // }

  return <Route {...rest} render={(rest) => <Component {...rest} />} />;
  // return (
  //   <Route
  //     {...rest}
  //     render={() => {
  //       console.log("Token: ", isPrivate);
  //       isPrivate === !!token ? (
  //         <Component />
  //       ) : (
  //         <Redirect to={{ pathname: isPrivate ? "/login" : "/" }} />
  //       );
  //     }}
  //   />
  // );
};

export default Router;
