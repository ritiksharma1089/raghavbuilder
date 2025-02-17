
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }:{children:any}) => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;


