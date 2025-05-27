// src/components/SplitSection.jsx

export default function SplitSection({ img, title, text, reverse }) {
  return (
    <section className={`split-section ${reverse ? 'reverse' : ''}`}>
      <div className="split-img">
        <img src={img} alt={title} />
      </div>
      <div className="split-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
