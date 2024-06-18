import React from "react";
import "../styleComponents/TableRelatorioCss.css";

interface Pagamento {
  nomePaciente: string;
  valorPago: string;
  formaPagamento: string;
  procedimento: string;
  profissional: string;
  horarioAgendado: string;
  dataHoraPagamento: string;
}

interface TableComponentProps {
  data: Pagamento[] | null;
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {

  // const formatarHorario = (horario: string) => {
  //   const dataFormatada = new Date(horario);
  //   return format(dataFormatada, "dd/MM/yyyy HH:mm");
  // };


  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor pago</th>
            <th>Forma de pagamento</th>
            <th>Procedimento</th>
            <th>Profissional</th>
            <th>Horário agendado</th>
            <th>Data/Hora pagamento</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.nomePaciente}</td>
                <td>R$ {item.valorPago},00</td>
                <td>{item.formaPagamento}</td>
                <td>{item.procedimento}</td>
                <td>{item.profissional}</td>
                <td>{item.horarioAgendado}</td>
                <td>{item.dataHoraPagamento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
