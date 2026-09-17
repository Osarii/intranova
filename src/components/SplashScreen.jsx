import BrandMark from './BrandMark.jsx';

function SplashScreen() {
  return (
    <main className="splash-screen" aria-label="Bienvenida a IntraNova">
      <div className="splash-bg-grid" aria-hidden="true" />
      <div className="splash-orbit splash-orbit-one" aria-hidden="true" />
      <div className="splash-orbit splash-orbit-two" aria-hidden="true" />
      <div className="splash-light splash-light-one" aria-hidden="true" />
      <div className="splash-light splash-light-two" aria-hidden="true" />
      <section className="splash-hero">
        <BrandMark className="splash-logo" />
        <div className="splash-copy">
          <span className="splash-kicker">Portal interno</span>
          <h1>IntraNova</h1>
          <p>Cargando experiencia corporativa</p>
        </div>
        <div className="splash-progress" aria-hidden="true">
          <span />
        </div>
      </section>
    </main>
  );
}

export default SplashScreen;
