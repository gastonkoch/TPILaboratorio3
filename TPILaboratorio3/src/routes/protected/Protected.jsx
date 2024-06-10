import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import PropTypes from "prop-types";


// VA A SER UTILIZADO PARA PROTEGER EL PAYMETHOD
const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

Protected.propTypes = {
  children: PropTypes.object,
};

export default Protected;
