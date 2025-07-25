import React, { useState, useEffect } from "react";
import fotoPerfil from "./assets/perfil4.png";
import fotoBiquini from "./assets/biquini.png";
import fotoCalcinha from "./assets/calcinha.png";

import "./App.css";

import Card from "./componentes/card.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simular carregamento
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className={`container ${isLoaded ? "loaded" : ""}`}>
      <header className="headerPerfil">
        <img src={fotoPerfil} alt="Tiffany Ramires" />
        <h1>@tiffany.ramires</h1>
        <h2>Tiffany Ramires</h2>
      </header>

      <div className="cards-container">
        <Card title="Privacy" img={fotoBiquini} link="#" />
        <Card
          title="Twitter"
          img={fotoCalcinha}
          link="https://x.com/TiffnyRamires"
        />
      </div>

      <footer className="footer">
        <p>© 2025 Tiffany Ramires. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
