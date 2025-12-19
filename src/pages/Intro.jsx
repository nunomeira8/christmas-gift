import { useNavigate } from "react-router-dom";
import "../styles/intro.css";
import caminho from "../assets/images/couple/caminho.JPEG";
import barcelona from "../assets/images/couple/barcelona.JPEG";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <main className="page center intro">
      <img
        src={barcelona}
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
        src={caminho}
        className="intro-image bottom"
      />
    </main>
  );
}
