import React, {useState, useEffect} from "react";
import "../stylePages/RelatorioCss.css";
import TableComponent from "../components/tableRelatorio";
import { Link } from "react-router-dom";
import axios from "axios";

interface Pagamento {
  nomePaciente: string;
  valorPago: string;
  formaPagamento: string;
  procedimento: string;
  profissional: string;
  horarioAgendado: string;
  dataHoraPagamento: string;
}


const Relatorio: React.FC = () => {
  const [data, setData] = useState<Pagamento[] | null>(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Pagamento[]>("http://localhost:5140/api/pagamento/relatorio");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar relatório de pagamento:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mainPageRelatorio">
      


        <div className="infoRelatorio">
          {/* <div className="inputGroup">
            <label htmlFor="cpfFilter">Filtrar por CPF:</label>
            <input id="cpfFilter" type="text" placeholder="Digite o CPF..." />
          </div> */}
          {/* <div className="DownloadRelatorio">
            <div className="inputGroup">
              <label htmlFor="reportDate">Data do Relatório:</label>
              <input id="reportDate" type="date" />
            </div>
            <button className="downloadButton">Baixar Relatório</button>
          </div> */}
        </div>

        <div className="containerRelatorio">
          <TableComponent data={data} />
        </div>

        <Link className="downloadButton" to={"/"}>
          Voltar
        </Link>

      </div>
    </>
  );
};

export default Relatorio;
