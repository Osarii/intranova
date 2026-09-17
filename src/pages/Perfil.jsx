import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext.jsx';

function Perfil() {
  const { user } = useAuth();
  const initials = user?.name
    ? user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'C';

  return (
    <main className="page profile-page">
      <section className="profile-card">
        <div className="profile-card-main">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div>
            <span className="eyebrow">Ruta privada</span>
            <h1>Perfil del colaborador</h1>
            <p>Información disponible únicamente después de iniciar sesión.</p>
          </div>
        </div>

        <div className="profile-status-card">
          <span>Estado</span>
          <strong>Activo</strong>
        </div>
      </section>

      <section className="content-card profile-details">
        <div>
          <span>Nombre</span>
          <strong>{user?.name || 'Colaborador Demo'}</strong>
        </div>
        <div>
          <span>Correo</span>
          <strong>{user?.email || 'colaborador@intranova.com'}</strong>
        </div>
        <div>
          <span>Área</span>
          <strong>{user?.area || 'Operaciones'}</strong>
        </div>
        <div>
          <span>Rol</span>
          <strong>{user?.role || 'Colaborador'}</strong>
        </div>
      </section>

      <Link className="button button-secondary" to="/dashboard">
        Volver al panel
      </Link>
    </main>
  );
}

export default Perfil;
