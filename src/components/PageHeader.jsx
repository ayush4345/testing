function PageHeader({ title, description, buttonText, onButtonClick }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {buttonText && (
          <button className="cta-btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </header>
  );
}

export default PageHeader;
