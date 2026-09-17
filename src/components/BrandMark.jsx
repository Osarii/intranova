import brandIcon from '../imgs/ChatGPT Image 17 sept 2026, 12_29_30 p.m..png';

function BrandMark({ className = '', alt = 'IntraNova' }) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src={brandIcon}
      alt={alt}
    />
  );
}

export default BrandMark;
