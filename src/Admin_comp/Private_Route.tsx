
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }:{children:any}) => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;


