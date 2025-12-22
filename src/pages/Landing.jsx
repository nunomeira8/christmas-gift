import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { preloadImages } from "../utils/preloadImages";

import "../styles/landing.css";

// intro
import barcelona from "../assets/images/couple/barcelona.webp";
import caminho from "../assets/images/couple/caminho.webp";

export default function Landing() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    preloadImages([barcelona, caminho]);
  }, []);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    // tempo tem de bater com a animação CSS
    setTimeout(() => {
      navigate("/intro");
    }, 900);
  };

  return (
    <main className="page center landing">
      <div className="snow-layer" />

      <div className="landing-card">
        {!isReady ? (
          <p className="muted">A preparar algo especial...</p>
        ) : (
          <>
            <h1>Chegou o momento!</h1>

            <div
              className={`emoji ${isOpening ? "explode" : ""}`}
              onClick={handleOpen}
            >
              🎁
            </div>
          </>
        )}
      </div>
    </main>
  );
}
