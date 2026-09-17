import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.jsx';
import PrivateHeader from '../components/PrivateHeader.jsx';

function PrivateRoutes() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <PrivateHeader />
      <Outlet />
    </>
  );
}

export default PrivateRoutes;
