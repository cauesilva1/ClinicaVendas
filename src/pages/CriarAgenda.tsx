import React from "react";
import "../stylePages/CriarAgendaCss.css";
import { Link } from "react-router-dom";


 const CriarAgenda: React.FC = () => {


    return (
      <>
        <div className="fullPageCliente">
  
          <div className="CriarAgendaCointainer">
  
              <Link className="BuscarAgendamentoButton" to={"/"}>
                Adicionar cliente
              </Link>
            
          
          </div>
  
          <Link className="VoltarButton" to={"/"}>
            Voltar
          </Link>
          
        </div>
      </>
    );
  };

export default CriarAgenda