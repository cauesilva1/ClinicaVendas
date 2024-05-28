import React from "react";
import "../stylePages/RelatorioCss.css";
import TableComponent from "../components/tableRelatorio";
import { Link } from "react-router-dom";

const Relatorio: React.FC = () => {
  return (
    <>
      <div className="mainPageRelatorio">
      


        <div className="infoRelatorio">
          <div className="inputGroup">
            <label htmlFor="cpfFilter">Filtrar por CPF:</label>
            <input id="cpfFilter" type="text" placeholder="Digite o CPF..." />
          </div>
          <div className="DownloadRelatorio">
            <div className="inputGroup">
              <label htmlFor="reportDate">Data do Relatório:</label>
              <input id="reportDate" type="date" />
            </div>
            <button className="downloadButton">Baixar Relatório</button>
          </div>
        </div>

        <div className="containerRelatorio">
          <TableComponent />
        </div>

        <Link className="downloadButton" to={"/"}>
          Voltar
        </Link>

      </div>
    </>
  );
};

export default Relatorio;
