import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandMark from '../components/BrandMark.jsx';
import { useAuth } from '../components/AuthContext.jsx';
import GraduatesCard from '../components/GraduatesCard.jsx';
import MacPreviewCard from '../components/MacPreviewCard.jsx';
import SplashScreen from '../components/SplashScreen.jsx';
import db from '../data/db.json';

const SPLASH_STORAGE_KEY = 'intranova-welcome-seen';

function Home() {
  const { isAuthenticated } = useAuth();
  const [showSplash, setShowSplash] = useState(() => {
    window.localStorage.removeItem(SPLASH_STORAGE_KEY);
    return window.sessionStorage.getItem(SPLASH_STORAGE_KEY) !== 'true';
  });

  useEffect(() => {
    if (!showSplash) {
      return undefined;
    }

    window.sessionStorage.setItem(SPLASH_STORAGE_KEY, 'true');

    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 2600);

    return () => window.clearTimeout(timer);
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main className="page home-page">
      <section className="home-command-card">
        <div className="command-card-main">
          <div className="command-card-topline">
            <BrandMark className="command-card-logo" />
            <span>IntraNova Workspace</span>
          </div>

          <div className="command-card-copy">
            <span className="eyebrow">Portal interno corporativo</span>
            <h1>Tu intranet privada, lista para operar.</h1>
            <p>
              Centraliza avisos, accesos rápidos, perfil del colaborador y paneles
              internos protegidos con rutas privadas.
            </p>
          </div>

          <div className="command-card-actions">
            {isAuthenticated ? (
              <Link className="button button-primary" to="/dashboard">
                Entrar al panel
              </Link>
            ) : (
              <Link className="button button-primary" to="/login">
                Acceso interno
              </Link>
            )}
            <Link className="button button-ghost" to="/seccion-inexistente">
              Simular 404
            </Link>
          </div>
        </div>

        <div className="command-card-preview" aria-label="Resumen del sistema">
          <div className="command-window-header" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="command-preview-code">
            <span className="code-muted">intranova/routes</span>
            <strong>PrivateRoutes.jsx</strong>
            <code>{'if (!isAuthenticated) redirect("/login")'}</code>
          </div>
          <div className="command-card-metrics">
            <div>
              <strong>3</strong>
              <span>Rutas publicas</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Rutas privadas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-overview-grid home-overview-centered" aria-label="Resumen de IntraNova">
        <GraduatesCard />
      </section>

      <section className="home-modules" aria-labelledby="modules-title">
        <div className="section-heading">
          <span className="eyebrow">Módulos de intranet</span>
          <h2 id="modules-title">Operación diaria</h2>
          <p>Vistas públicas y privadas organizadas para validar navegación, protección y estado.</p>
        </div>

        <div className="feature-grid">
          {db.courses.map((course) => (
            <MacPreviewCard
              key={course.id}
              title={course.title}
              description={course.description}
              tags={[course.category, course.level]}
              details={[
                { label: 'Progreso', value: `${course.progress}%` },
                { label: 'Estado', value: course.status },
              ]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
