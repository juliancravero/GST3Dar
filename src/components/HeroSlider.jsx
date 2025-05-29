import { useState, useEffect } from "react";

const slides = [
  "/images/Banner4.png",
  "/images/Banner3.png",
  "/images/Banner1.png",
  "/images/banner2.png"
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <button className="hero-arrow left" onClick={prevSlide}>‹</button>
      
      <div className="hero-image-only">
        <img src={slides[index]} alt={`Slide ${index}`} />
      </div>
      
      <button className="hero-arrow right" onClick={nextSlide}>›</button>
    </section>
  );
}
