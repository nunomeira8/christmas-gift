import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/intro.css";
import caminho from "../assets/images/couple/caminho.JPEG";
import barcelona from "../assets/images/couple/barcelona.JPEG";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    [barcelona, caminho].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main className="page center intro">
      <img src={barcelona} className="intro-image top" />

      <div className="intro-content">
        <h1>Temos uma nova aventura pela frente ✈️</h1>

        <p className="muted">Para onde vamos?</p>

        <button
          className="primary-button"
          onClick={() => navigate("/destinations")}
        >
          Vamos escolher! 🌍
        </button>
      </div>

      <img src={caminho} className="intro-image bottom" />
    </main>
  );
}
