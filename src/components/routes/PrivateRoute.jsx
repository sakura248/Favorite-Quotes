import PropTypes from "prop-types";
import React, { Navigate, useLocation } from "react-router-dom";
import UseAuthStatus from "../../hooks/UseAuthStatus";

const inPrivatePaths = ["/MyAccount", "/MyFavorites", "NewPrivatePage"];

function PrivateRoute({ children }) {
  const location = useLocation();
  const { loggedIn } = UseAuthStatus();
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
