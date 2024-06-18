import React, { useState } from "react";
import "../stylePages/HomeCss.css";
import FormaDePagamento from "../components/FormaDePagamento";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [profissional, setProfissional] = useState("");
  const [valor, setValor] = useState("");
  const [horario, setHorario] = useState("");
  const [data, setData] = useState("");
  const [formaPagamento, setFormaPagamento] = useState<string | null>(null); // Estado para armazenar a forma de pagamento selecionada
  const [idAgendamento, setIdAgendamento] = useState<number | null>(null); // Estado para armazenar o ID de agendamento

  const navigate = useNavigate();

  async function BuscarInfoCliente(cpf: string) {
    try {
      const responseCliente = await axios.get(`http://localhost:5140/api/cliente/${cpf}`);
      const responseAgenda = await axios.get(`http://localhost:5140/api/agenda/${cpf}`);

      const horario = responseAgenda.data.horario_agendamento;
      const dataPart = horario.split("T")[0];
      const horarioPart = horario.split("T")[1].substring(0, 5); // Aqui, pegamos apenas HH:mm

      setNome(responseCliente.data.Nome_Cliente);
      setTelefone(responseCliente.data.Telefone);
      setRua(responseCliente.data.Logradouro);
      setBairro(responseCliente.data.Bairro);
      setComplemento(responseCliente.data.Complemento);
      setProcedimento(responseAgenda.data.procedimento.procedimento);
      setProfissional(responseAgenda.data.nome_profissional.nome_profissional);
      setValor(responseAgenda.data.procedimento.valor);
      setIdAgendamento(responseAgenda.data.id_agendamento); // Define o ID de agendamento aqui
      setData(dataPart);  
      setHorario(horarioPart);

      return responseCliente.data; // Retorna os dados para onde a função for chamada
    } catch (error) {
      console.error("Erro ao buscar informações do cliente:", error);
      throw error; // Lança o erro para ser tratado onde a função for chamada
    }
  }

  async function realizarVenda() {
    try {
      if (!cpf) {
        return alert("Selecione um cliente para realizar a venda");
      }

      if (!formaPagamento) {
        return alert("Selecione uma forma de pagamento");
      } 
      const dataPagamento = new Date().toISOString(); // Cria a data de pagamento 

      const vendaData = {
        Cpf_Cliente: cpf,
        id_agendamento: idAgendamento, // Utiliza o ID de agendamento obtido na busca
        forma_pagamento: formaPagamento,
        data_pagamento: dataPagamento,
        valorPago: valor
      };

      console.log("Dados da venda:", vendaData);

      const responseVenda = await axios.post("http://localhost:5140/api/pagamento", vendaData);
      console.log("Resposta da venda:", responseVenda.data);
      navigate('/Relatorio');

      alert("Venda realizada com sucesso!");

    } catch (error) {
      console.error("Erro ao realizar venda:", error);
      alert("Erro ao realizar venda. Verifique o console para mais detalhes.");
    }
  }

  return (
    <>
      <div className="fullPage">
        <div className="scheduleForm">
          <div className="buscaCliente">
            <h2>Busca de cliente</h2>

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Seu Nome ..."
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  id="telefone"
                  className="input"
                  type="text"
                  placeholder="Seu Telefone ..."
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="cpf">Cpf:</label>
                <input
                  id="cpf"
                  className="input"
                  type="text"
                  placeholder="Seu CPF ...."
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
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
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="telefone">Bairro:</label>
                <input
                  id="Bairro"
                  className="input"
                  type="text"
                  placeholder="Seu Bairro ..."
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="complemento">Complemento:</label>
                <input
                  id="complemento"
                  className="input"
                  type="text"
                  placeholder="Complemento ...."
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </div>
            </div>

            <button className="BuscarAgendamentoButton" onClick={() => BuscarInfoCliente(cpf)}>
              Buscar Agendamento
            </button>
          </div>

          <div className="divisor" />

          <div className="AgendamentoInfo">
            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="procedimento">Procedimento:</label>
                <input
                  id="procedimento"
                  className="input"
                  type="text"
                  placeholder="Procedimento..."
                  value={procedimento}
                  onChange={(e) => setProcedimento(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="profissional">Profissional:</label>
                <input
                  id="profissional"
                  className="input"
                  type="text"
                  placeholder="Profissional..."
                  value={profissional}
                  onChange={(e) => setProfissional(e.target.value)}
                />
              </div>

              <div className="inputGroup">
                <FormaDePagamento setFormaPagamento={setFormaPagamento}/>
              </div>
            </div>

            <div className="inputs">
              <div className="inputGroup">
                <label htmlFor="valor">Valor:</label>
                <input
                  id="valor"
                  className="input"
                  type="text"
                  placeholder="Valor..."
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="horario">Horario:</label>
                <input
                  id="horario"
                  className="input"
                  type="text"
                  placeholder="Horario..."
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="data">Data:</label>
                <input
                  id="data"
                  className="input"
                  type="text"
                  placeholder="Data..."
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button onClick={() => realizarVenda()} className="ConfirmarVendaButton">
            Confirmar Venda
          </button>
        </div>

        <Link className="downloadButton" to={"/"}>
          Voltar
        </Link>
      </div>
    </>
  );
};

export default Home;
