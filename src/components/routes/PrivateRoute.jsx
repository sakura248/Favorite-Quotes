import PropTypes from "prop-types";
import React, { Navigate, useLocation } from "react-router-dom";
import useAuthStatus from "../../hooks/useAuthStatus";

const inPrivatePaths = ["/MyAccount", "/MyFavorites", "NewPrivatePage"];

function PrivateRoute({ children }) {
  const location = useLocation();
  const { loggedIn } = useAuthStatus();
  const current = location.pathname;

  const isPrivate = inPrivatePaths.includes(current);

  if (isPrivate && current !== "/Login" && !loggedIn) {
    return <Navigate to="/Login" state={{ from: location }} />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default PrivateRoute;
