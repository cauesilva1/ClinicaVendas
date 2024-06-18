import React, { useState } from "react";
import "../stylePages/CriarClienteCss.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const CriarCliente: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");

  const navigate = useNavigate();

  async function handleCriarCliente() {
    const dataCliente = {
      Cpf_Cliente: cpf,
      Nome_Cliente: nome,
      Telefone: tel,
      Logradouro: rua,
      Numero: numero,
      Bairro: bairro,
      Cidade: cidade,
      Uf: uf,
      Complemento: complemento,
      Cep: cep,
    };

    try {
      const response = await axios.post(
        "http://localhost:5140/api/cliente",
        dataCliente
      );
      console.log("Criado com sucesso", response.data);
      navigate('/');
    } catch (error) {
      console.error(
        "Erro ao criar cliente:"
      );
    }
  }

  return (
    <>
      <div className="fullPageCliente">
        <div className="CriarClienteCointainer">
          <div className="criarCliente">
            <h2>Criar de cliente</h2>

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Seu Nome ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  id="telefone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Seu Telefone ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cpf">Cpf:</label>
                <input
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
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
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Sua Rua ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="Bairro">Bairro:</label>
                <input
                  id="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Seu Bairro ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="numero">numero:</label>
                <input
                  id="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="numero ...."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="Complemento">Complemento:</label>
                <input
                  id="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
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
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Sua cidade ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="uf">uf:</label>
                <input
                  id="uf"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Seu uf ..."
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cep">cep:</label>
                <input
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="cep ...."
                />
              </div>
            </div>

            <button
              className="BuscarAgendamentoButton"
              onClick={handleCriarCliente}
            >
              Adicionar cliente
            </button>
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
