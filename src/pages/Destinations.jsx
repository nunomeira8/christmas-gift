import { useEffect, useRef, useState } from "react";
import { destinations } from "../data/destinations";
import "../styles/destinations.css";
import { useNavigate } from "react-router-dom";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Destinations() {
  const navigate = useNavigate();

  const [orderedDestinations] = useState(() =>
    shuffleArray(destinations)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  // Garante posição inicial correta
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  const scrollToIndex = (index) => {
    const maxIndex = orderedDestinations.length; // inclui o card final
    const clamped = Math.max(0, Math.min(index, maxIndex));

    setCurrentIndex(clamped);

    if (!cardRef.current || !carouselRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;

    carouselRef.current.scrollTo({
      left: clamped * cardWidth,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 60;

    if (diff > threshold) {
      scrollToIndex(currentIndex + 1);
    } else if (diff < -threshold) {
      scrollToIndex(currentIndex - 1);
    }

    setStartX(null);
  };

  return (
    <main className="page destinations-carousel">
      <div
        ref={carouselRef}
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {orderedDestinations.map((destination, index) => (
          <section
            className="destination-card"
            key={destination.id}
            ref={index === 0 ? cardRef : null}
          >
            <div className="destination-inner">
              <Slideshow images={destination.images} />

              <div className="destination-content">
                <h1>
                  {destination.city}
                  <span className="muted">
                    , {destination.country}
                  </span>
                </h1>

                <p className="black-text">
                  {destination.description}
                </p>

                <ul className="highlights black-text">
                  {destination.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <div className="choose-wrapper">
                  <a
                    href={destination.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="choose-button"
                  >
                    É este ✈️
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CARD FINAL */}
        <section className="destination-card">
          <div className="destination-inner end-card">
            <h1>Gostaste da prenda? 🎁</h1>
            <button
              className="secondary-button"
              onClick={() => navigate("/intro")}
            >
              Voltar ao início ↺
            </button>
          </div>
        </section>
      </div>

      <ProgressDots
        total={orderedDestinations.length + 1}
        current={currentIndex}
      />
    </main>
  );
}

/* ---------- COMPONENTES ---------- */

function Slideshow({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow">
      <img src={images[currentImage]} alt="" />
    </div>
  );
}

function ProgressDots({ total, current }) {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
