import React from "react";
import "../stylePages/HomeCss.css";
import FormaDePagamento from "../components/FormaDePagamento";

const Home: React.FC = () => {
  return (
    <>
      <div className="fullPage">

        <div className="scheduleForm">

          <div className="buscaCliente">

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Seu Nome ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  id="telefone"
                  className="input"
                  type="text"
                  placeholder="Seu Telefone ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cpf">Cpf:</label>
                <input
                  id="cpf"
                  className="input"
                  type="text"
                  placeholder="Seu CPF ...."
                />
              </div>
            </div>

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="name">Rua:</label>
                <input
                  id="Rua"
                  className="input"
                  type="text"
                  placeholder="Sua Rua ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Bairro:</label>
                <input
                  id="Bairro"
                  className="input"
                  type="text"
                  placeholder="Seu Bairro ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cpf">Complemento:</label>
                <input
                  id="cpf"
                  className="input"
                  type="text"
                  placeholder="Complemento ...."
                />
              </div>
            </div>

            <button className="BuscarAgendamentoButton">
              Buscar Agendamento
            </button>
          </div>

          <div className="divisor" />

          <div className="AgendamentoInfo">

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="name">Procedimento:</label>
                <input
                  id="ProcedimentoAgendado"
                  className="input"
                  type="text"
                  placeholder="Procedimento..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Profissional:</label>
                <input
                  id="Profissional"
                  className="input"
                  type="text"
                  placeholder="Profissional..."
                />
              </div>

              <div className="inputGroup">
                <FormaDePagamento />
              </div>


            </div>

            <div className="inputs">

              <div className="inputGroup">
                <label htmlFor="name">Valor:</label>
                <input
                  id="ProcedimentoAgendado"
                  className="input"
                  type="text"
                  placeholder="Valor..."
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="name">Horario:</label>
                <input
                  id="ProcedimentoAgendado"
                  className="input"
                  type="text"
                  placeholder="Horario..."
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="name">Data:</label>
                <input
                  id="ProcedimentoAgendado"
                  className="input"
                  type="text"
                  placeholder="Data..."
                />
              </div>
              
            </div>


          </div>

          <button className="ConfirmarVendaButton">
              Confirmar Venda
            </button>

        </div>
      </div>
      ;
    </>
  );
};

export default Home;
