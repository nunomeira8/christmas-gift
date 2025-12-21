import { useEffect, useRef, useState } from "react";
import { destinations } from "../data/destinations";
import "../styles/destinations.css";
import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow.jsx";
import ProgressDots from "../components/ProgressDots.jsx";

/* ---------- HELPERS ---------- */

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function preloadImages(destinations) {
  destinations.forEach((destination) => {
    destination.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
}

/* ---------- COMPONENT ---------- */

export default function Destinations() {
  const navigate = useNavigate();

  const [orderedDestinations] = useState(() =>
    shuffleArray(destinations)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [showHint, setShowHint] = useState(true);

  // 👉 destinos escolhidos (permite vários)
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  /* ---------- EFFECTS ---------- */

  // preload imagens
  useEffect(() => {
    preloadImages(orderedDestinations);
  }, [orderedDestinations]);

  // garantir posição inicial
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, []);

  /* ---------- NAVIGAÇÃO ---------- */

  const scrollToIndex = (index) => {
    const maxIndex = orderedDestinations.length; // inclui card final
    const clamped = Math.max(0, Math.min(index, maxIndex));

    if (showHint && clamped !== 0) {
      setShowHint(false);
    }

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

  /* ---------- SELEÇÃO ---------- */

  const toggleDestination = (destination) => {
    setSelectedDestinations((prev) => {
      if (prev.includes(destination.id)) {
        return prev.filter((id) => id !== destination.id);
      }
      return [...prev, destination.id];
    });
  };

  const isSelected = (id) => selectedDestinations.includes(id);

  /* ---------- RENDER ---------- */

  return (
    <main className="page destinations-carousel">
      {showHint && currentIndex === 0 && (
        <div className="gesture-hint">
          <span>Desliza para explorar ✨</span>
        </div>
      )}

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
                  {!isSelected(destination.id) ? (
                    <button
                      className="choose-button"
                      onClick={() => toggleDestination(destination)}
                    >
                      Quero visitar! 🌍
                    </button>
                  ) : (
                    <span className="selected-feedback">
                      ✔ Selecionado
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ---------- CARD FINAL ---------- */}
        <section className="destination-card">
          <div className="destination-inner end-card">
            <h1>A viagem começa aqui ✈️</h1>

            {selectedDestinations.length === 0 ? (
              <p className="muted">
                Ainda não escolheste nenhum destino para visitar.
              </p>
            ) : (
              <ul className="highlights black-text">
                <h3>Os teus destinos escolhidos:</h3>
                {orderedDestinations
                  .filter((d) =>
                    selectedDestinations.includes(d.id)
                  )
                  .map((d) => (
                    <li key={d.id}>
                      • {d.city}, {d.country}
                    </li>
                  ))}
              </ul>
            )}

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
