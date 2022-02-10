import React from "react";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children, ...rest }) => {
  //=========== get token on localStorage==================//
  const token = localStorage.getItem("token");

  const location = useLocation();
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivetRouter;
