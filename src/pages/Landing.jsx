import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { preloadImages } from "../utils/preloadImages";

// intro
import barcelona from "../assets/images/couple/barcelona.webp";
import caminho from "../assets/images/couple/caminho.webp";

export default function Landing() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    preloadImages([barcelona, caminho]);
  }, []);

  return (
    <main className="page center landing">
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎄</div>

      {!isReady ? (
        <p className="muted">A preparar algo especial para ti…</p>
      ) : (
        <>
          <h1 style={{ marginBottom: "2rem" }}>
            Tenho algo para desembrulhares
          </h1>

          <button className="primary-button" onClick={() => navigate("/intro")}>
            Descobre a tua prenda ✨
          </button>
        </>
      )}
    </main>
  );
}
