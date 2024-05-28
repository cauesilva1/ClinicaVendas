import "../styleComponents/TableRelatorioCss.css";

const TableComponent = () => {
  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor pago</th>
            <th>Forma de pagamento</th>
            <th>Procedimento</th>
            <th>Proficional</th>
            <th>Horario agendado</th>
            <th>Data/Hora pagamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Danilo Sousa</td>
            <td>R$200,00</td>
            <td>Dinheiro</td>
            <td>Consulta</td>
            <td>Dr. Silva</td>
            <td>10:30</td>
            <td>25/05/2024 14:00</td>
          </tr>
          <tr>
          <td>Zahra Ambessa</td>
            <td>R$350,00</td>
            <td>Cartão</td>
            <td>Exame</td>
            <td>Dr. Mendes</td>
            <td>11:00</td>
            <td>26/05/2024 15:30</td>
          </tr>
          <tr>
          <td>Jasper Eriksson</td>
            <td>R$150,00</td>
            <td>Dinheiro</td>
            <td>Vacinação</td>
            <td>Dr. Lima</td>
            <td>12:00</td>
            <td>27/05/2024 16:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
