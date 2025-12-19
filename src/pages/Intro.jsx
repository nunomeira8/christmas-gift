import { useNavigate } from "react-router-dom";
import "../styles/intro.css";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <main className="page center intro">
      <img
        src="/assets/images/couple/barcelona.JPEG"
        className="intro-image top"
      />

      <div className="intro-content">
        <h1>Temos uma viagem para descobrir ✈️</h1>

        <p className="muted">
          Vamos explorar algumas possibilidades juntos.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/destinations")}
        >
          Começar a explorar 🌍
        </button>
      </div>

      <img
        src="/assets/images/couple/caminho.JPEG"
        className="intro-image bottom"
      />
    </main>
  );
}
