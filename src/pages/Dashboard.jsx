import { Link } from 'react-router-dom';
import MacPreviewCard from '../components/MacPreviewCard.jsx';
import db from '../data/db.json';

function Dashboard() {
  return (
    <main className="page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">Ruta privada</span>
          <h1>Panel interno</h1>
          <p>Solo un colaborador autenticado puede visualizar este contenido.</p>
        </div>
        <Link className="button button-secondary" to="/perfil">
          Ver mi perfil
        </Link>
      </section>

      <section className="stats-grid">
        {db.courses.map((course) => (
          <MacPreviewCard
            key={course.id}
            title={course.title}
            description={course.description}
            tags={[course.category, course.status]}
            details={[
              { label: 'Nivel', value: course.level },
              { label: 'Avance', value: `${course.progress}%` },
            ]}
          />
        ))}
      </section>

      <section className="content-card">
        <h2>Actividad reciente</h2>
        <div className="course-list">
          {db.courses.map((course) => (
            <div className="course-row" key={course.id}>
              <div>
                <strong>{course.title}</strong>
                <span>{course.category} · {course.status}</span>
              </div>
              <progress value={course.progress} max="100">{course.progress}%</progress>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
