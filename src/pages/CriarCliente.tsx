import React from "react";
import "../stylePages/CriarClienteCss.css";
import { Link } from "react-router-dom";

const CriarCliente: React.FC = () => {


  return (
    <>
      <div className="fullPageCliente">

        <div className="CriarClienteCointainer">

          <div className="criarCliente">

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
                <label htmlFor="Rua">Rua:</label>
                <input
                  id="Rua"
                  className="input"
                  type="text"
                  placeholder="Sua Rua ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="Bairro">Bairro:</label>
                <input
                  id="Bairro"
                  className="input"
                  type="text"
                  placeholder="Seu Bairro ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="numero">numero:</label>
                <input
                  id="numero"
                  className="input"
                  type="text"
                  placeholder="numero ...."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="Complemento">Complemento:</label>
                <input
                  id="Complemento"
                  className="input"
                  type="text"
                  placeholder="Complemento ...."
                />
              </div>
            </div>

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="cidade">cidade:</label>
                <input
                  id="cidade"
                  className="input"
                  type="text"
                  placeholder="Sua cidade ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="uf">uf:</label>
                <input
                  id="uf"
                  className="input"
                  type="text"
                  placeholder="Seu uf ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cep">cep:</label>
                <input
                  id="cep"
                  className="input"
                  type="text"
                  placeholder="cep ...."
                />
              </div>

            </div>
            

            <Link className="BuscarAgendamentoButton" to={"/"}>
              Adicionar cliente
            </Link>
            
          </div>

        </div>

        <Link className="VoltarButton" to={"/"}>
          Voltar
        </Link>
        
      </div>
    </>
  );
};

export default CriarCliente;
