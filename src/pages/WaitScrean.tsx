import React from "react";
import "../stylePages/WaitScreenCss.css";
import { Link } from "react-router-dom";

const WaitScrean: React.FC = () => {
  return (
    <>


      <div className="mainPage">
        <div className="container">
            <h1>Bem-vindo ao Sistema de Vendas</h1>

            <Link className="buttonWait" to={"/Home"}>Agendar Agora</Link>
        </div>
      </div>
    </>
  );
};

export default WaitScrean;
