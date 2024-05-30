import React from "react";
import "../stylePages/WaitScreenCss.css";
import { Link } from "react-router-dom";

const WaitScrean: React.FC = () => {
  return (
    <>


      <div className="mainPage">
        <div className="container">
            <h1>Bem-vindo ao Sistema de Vendas</h1>

          <div className="buttons">
            <Link className="buttonWait" to={"/Home"}>Agendar Agora</Link>
            <Link className="buttonWait" to={"/Relatorio"}>Ver relatorios</Link>
            <Link className="buttonWait" to={"/CriarCliente"}>Adicionar Cliente</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitScrean;
