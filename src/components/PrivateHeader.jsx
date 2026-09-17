import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import BrandMark from './BrandMark.jsx';

function PrivateHeader() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="private-toolbar">
      <span className="private-toolbar-brand">
        <BrandMark className="brand-mark-toolbar" />
        Zona interna de colaboradores
      </span>
      <button className="button button-danger" type="button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default PrivateHeader;
