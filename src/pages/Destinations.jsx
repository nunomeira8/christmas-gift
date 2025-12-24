import { useEffect, useRef, useState } from "react";
import { destinations } from "../data/destinations";
import "../styles/destinations.css";
import Slideshow from "../components/Slideshow.jsx";
import ProgressDots from "../components/ProgressDots.jsx";
import paris from "../assets/images/couple/ending/paris.png";
import madrid from "../assets/images/couple/ending/madrid.png";
import rome from "../assets/images/couple/ending/rome.png";
import london from "../assets/images/couple/ending/london.png";
import vienna from "../assets/images/couple/ending/vienna.png";
import amsterdam from "../assets/images/couple/ending/amsterdam.png";
import brussels from "../assets/images/couple/ending/brussels.png";
import prague from "../assets/images/couple/ending/prague.png";
import milano from "../assets/images/couple/ending/milano.png";

const endingImages = {
  paris: paris,
  madrid: madrid,
  roma: rome,
  london: london,
  vienna: vienna,
  amsterdam: amsterdam,
  bruxelas: brussels,
  milano: milano,
  praga: prague,
};

const countryFlags = {
  paris: "🇫🇷",
  madrid: "🇪🇸",
  roma: "🇮🇹",
  london: "🇬🇧",
  vienna: "🇦🇹",
  amsterdam: "🇳🇱",
  bruxelas: "🇧🇪",
  praga: "🇨🇿",
  milano: "🇮🇹",
};

/* ---------- HELPERS ---------- */

function shuffleWithParisFirst(destinations) {
  const paris = destinations.find((d) => d.city === "Paris");
  const rest = destinations.filter((d) => d.city !== "Paris");

  // baralhar o resto
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  return paris ? [paris, ...rest] : rest;
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
  const [orderedDestinations] = useState(() =>
    shuffleWithParisFirst(destinations)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLimitMessage, setShowLimitMessage] = useState(false);
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

  const resetAndGoToStart = () => {
    setSelectedDestinations([]);
    setShowLimitMessage(false);
    setShowHint(true);
    scrollToIndex(0);
  };

  /* ---------- SELEÇÃO ---------- */

  const toggleDestination = (destination) => {
    setSelectedDestinations((prev) => {
      if (prev.includes(destination.id)) {
        setShowLimitMessage(false);
        return prev.filter((id) => id !== destination.id);
      }

      const updated = [...prev, destination.id];

      if (updated.length > 1) {
        setShowLimitMessage(true);
      }

      return updated;
    });
  };

  const isSelected = (id) => selectedDestinations.includes(id);

  const selectedDestination = orderedDestinations.find((d) =>
    selectedDestinations.includes(d.id)
  );

  const finalImage = selectedDestination
    ? endingImages[selectedDestination.id]
    : null;

  const flagEmoji = selectedDestination
    ? countryFlags[selectedDestination.id]
    : null;

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
                  <span className="muted">, {destination.country}</span>
                </h1>

                <p className="black-text">{destination.description}</p>

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
                    <span className="selected-feedback">✔ Selecionado</span>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ---------- CARD FINAL ---------- */}
        <section className="destination-card">
          <div className="destination-inner end-card">
            <h1 className="final-title">
              ✈️
              {selectedDestinations.length === 1 && flagEmoji && (
                <span className="flag-emoji">{flagEmoji}</span>
              )}
            </h1>

            {selectedDestinations.length === 0 ? (
              <p className="muted">
                Ainda não escolheste nenhum destino para visitar.
              </p>
            ) : selectedDestinations.length === 1 ? (
              <ul className="highlights black-text">
                {finalImage && (
                  <img
                    src={finalImage}
                    alt={`Viagem para ${selectedDestination.city}`}
                    className="final-image"
                  />
                )}
                <h3>A nossa viagem está decidida!</h3>
                {orderedDestinations
                  .filter((d) => selectedDestinations.includes(d.id))
                  .map((d) => (
                    <li key={d.id}>
                      Estamos a caminho de: {d.city}, {d.country}. Quando é que
                      fazemos as malas? 🎒
                    </li>
                  ))}
              </ul>
            ) : (
              <>
                <ul className="highlights black-text">
                  <h3>Escolheste vários destinos:</h3>
                  {orderedDestinations
                    .filter((d) => selectedDestinations.includes(d.id))
                    .map((d) => (
                      <li key={d.id}>
                        • {d.city}, {d.country}.
                      </li>
                    ))}
                </ul>
                {showLimitMessage && (
                  <p className="muted">Só pode ser um desta vez 💝</p>
                )}

                <button
                  className="secondary-button"
                  onClick={resetAndGoToStart}
                >
                  Voltar ao início e escolher de novo ↺
                </button>
              </>
            )}

            {selectedDestinations.length === 0 && (
              <button
                className="secondary-button"
                onClick={() => scrollToIndex(0)}
              >
                Voltar ao início 🌍
              </button>
            )}
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
