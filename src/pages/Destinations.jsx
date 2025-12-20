import { useEffect, useState } from "react";
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
  const [currentDestination, setCurrentDestination] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const [randomizedDestinations] = useState(() => shuffleArray(destinations));

  const destination = randomizedDestinations[currentDestination];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % destination.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [destination]);

  const goNext = () => {
    if (currentDestination < randomizedDestinations.length - 1) {
      setCurrentDestination((prev) => prev + 1);
      setCurrentImage(0); // reset aqui
    }
  };

  const goPrev = () => {
    if (currentDestination > 0) {
      setCurrentDestination((prev) => prev - 1);
      setCurrentImage(0); // reset aqui
    }
  };

  const navigate = useNavigate();

  return (
    <main className="page destination">
      {/* Slideshow */}
      <div
        className="slideshow"
        onTouchStart={(e) => (window.startX = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX;
          if (window.startX - endX > 50) {
            setCurrentImage((currentImage + 1) % destination.images.length);
          }
          if (endX - window.startX > 50) {
            setCurrentImage(
              (currentImage - 1 + destination.images.length) %
                destination.images.length
            );
          }
        }}
      >
        <img src={destination.images[currentImage]} alt={destination.city} />
      </div>

      {/* Conteúdo */}
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

      <div className="nav-buttons">
        {currentDestination > 0 ? (
          <button className="secondary-button" onClick={goPrev}>
            ← Anterior
          </button>
        ) : (
          <div className="spacer" />
        )}

        {currentDestination < randomizedDestinations.length - 1 ? (
          <button className="secondary-button" onClick={goNext}>
            Próximo →
          </button>
        ) : (
          <button
            className="secondary-button"
            onClick={() => navigate("/intro")}
          >
            Voltar ao início ↺
          </button>
        )}
      </div>
    </main>
  );
}
