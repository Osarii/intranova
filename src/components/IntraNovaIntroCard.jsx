import BrandMark from './BrandMark.jsx';

function IntraNovaIntroCard({ variant = '' }) {
  return (
    <article className={`intro-card ${variant ? `intro-card-${variant}` : ''}`} aria-label="IntraNova">
      <div className="intro-border" />
      <div className="intro-content">
        <div className="intro-logo">
          <BrandMark className="intro-brand-mark" />
          <span className="intro-trail" />
        </div>
        <span className="intro-logo-bottom-text">IntraNova</span>
      </div>
      <span className="intro-bottom-text">portal interno</span>
    </article>
  );
}

export default IntraNovaIntroCard;
