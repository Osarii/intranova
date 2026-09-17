import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="tv-404-page">
      <section className="tv-404-wrapper" aria-labelledby="not-found-title">
        <div className="tv-404-main">
          <div className="tv-antenna">
            <div className="tv-antenna-shadow" />
            <div className="tv-a1" />
            <div className="tv-a1d" />
            <div className="tv-a2" />
            <div className="tv-a2d" />
          </div>

          <div className="tv-box">
            <div className="tv-display">
              <div className="tv-screen-out">
                <div className="tv-screen-wrap">
                  <div className="tv-screen">
                    <span className="tv-notfound-text">NOT FOUND</span>
                  </div>
                  <div className="tv-screen-mobile">
                    <span className="tv-notfound-text">NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tv-lines">
              <div className="tv-line1" />
              <div className="tv-line2" />
              <div className="tv-line3" />
            </div>

            <div className="tv-buttons">
              <div className="tv-b1"><div /></div>
              <div className="tv-b2" />
              <div className="tv-speakers">
                <div className="tv-g1">
                  <div className="tv-g11" />
                  <div className="tv-g12" />
                  <div className="tv-g13" />
                </div>
                <div className="tv-g" />
                <div className="tv-g" />
              </div>
            </div>
          </div>

          <div className="tv-bottom">
            <div className="tv-base1" />
            <div className="tv-base2" />
            <div className="tv-base3" />
          </div>
        </div>

        <h1 id="not-found-title" className="tv-text-404" aria-label="404">
          <span>4</span><span>0</span><span>4</span>
        </h1>

        <p className="tv-404-message">La seccion que buscas no existe en IntraNova.</p>

        <Link className="button button-primary" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
