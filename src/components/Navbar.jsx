import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import BrandMark from './BrandMark.jsx';

function Navbar() {
  const { isAuthenticated } = useAuth();

  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link';

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink className="brand" to="/">
          <BrandMark className="brand-mark-nav" />
          <span>IntraNova</span>
        </NavLink>

        <nav className="navbar" aria-label="Navegación principal">
          <NavLink className={linkClass} to="/" end>
            Inicio
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink className={linkClass} to="/dashboard">
                Panel
              </NavLink>
              <NavLink className={linkClass} to="/perfil">
                Mi perfil
              </NavLink>
            </>
          ) : (
            <NavLink className={linkClass} to="/login">
              Acceso
            </NavLink>
          )}
        </nav>

        <div className="header-actions">
          <NavLink className="header-action-button" to={isAuthenticated ? '/dashboard' : '/login'}>
            {isAuthenticated ? 'Abrir panel' : 'Entrar'}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
