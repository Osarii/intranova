function MacPreviewCard({ title, description, tags = [], details = [] }) {
  return (
    <article className="mac-card">
      <div className="mac-header" aria-hidden="true">
        <span className="red" />
        <span className="yellow" />
        <span className="green" />
      </div>

      <h2 className="mac-card-title">{title}</h2>
      <p className="mac-card-description">{description}</p>

      <div className="mac-card-tags">
        {tags.map((tag) => (
          <span className="mac-card-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="apple-card-details">
        {details.map(({ label, value }) => (
          <div className="apple-card-detail" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default MacPreviewCard;
