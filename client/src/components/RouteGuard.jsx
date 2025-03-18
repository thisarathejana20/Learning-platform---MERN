import { Fragment } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RouteGuard = ({ authenticated, user, element }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (
    authenticated &&
    (user?.role !== "instructor" || location.pathname.includes("/auth"))
  ) {
    return navigate("/home");
  }

  if (
    authenticated &&
    user?.role === "instructor" &&
    location.pathname.includes("/auth")
  ) {
    return navigate("/instructor");
  }

  return <Fragment>{element}</Fragment>;
};

export default RouteGuard;
