import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbarOn";
import { Orion } from "../components/Orion/modal/index";
import { DadosAlunos } from "../connection/notaService";
import ModalStudent from "../components/modalStudent/modal.jsx"
import ModalLoading from "../components/modalLoading/index.jsx";

export default function Nota() {
  // armazena os dados do alunos
  const [alunosStatus, setAlunosStatus] = useState([]);
  // armazena informacoes do aluno no modal
  const [modalInfo, setModalInfo] = useState(null);
  // controle de loading
  const [loading, setLoading] = useState(true);
  // erros
  const [error, setError] = useState(null);

  // obter os dados dos alunos
  useEffect(() => {
    const carregarDadosAlunos = async () => {
      try {
        const response = await DadosAlunos();
        setAlunosStatus(response);
        setLoading(false); // a requisição terminou
      } catch (error) {
        setError("Erro ao carregar as notas dos alunos");
        setLoading(false); // a requisição terminou, mesmo com erro
      }
    };

    carregarDadosAlunos();
  }, []); // requisição so sera feita uma vez

  // atualiza a menção de um aluno
  const atualizarMencao = (index, bimestre, valor) => {
    const novosAlunos = [...alunosStatus];
    novosAlunos[index].mencoes[bimestre] = valor;
    setAlunosStatus(novosAlunos);
  };

  // adiciona mais inputs de mencao para todos os alunos
  const adicionarMencao = () => {
    const novosAlunos = alunosStatus.map((aluno) => {
      if (aluno.mencoes.length < 5) {
        aluno.mencoes.push("");
      }
      return aluno;
    });
    setAlunosStatus(novosAlunos);
  };

  // Remove a ultima menção - mínimo de 3 inputs
  const removerMencao = () => {
    const novosAlunos = alunosStatus.map((aluno) => {
      if (aluno.mencoes.length > 3) {
        aluno.mencoes.pop();
      }
      return aluno;
    });
    setAlunosStatus(novosAlunos);
  };

  // abre o modal com as informações do aluno
  const DadosAluno = (aluno) => {
    setModalInfo(aluno);
  };

  // fecha o modal
  const FecharModal = () => {
    setModalInfo(null);
  };

  // Função para fechar o modal ao clicar fora
  const ClicarFora = (e) => {
    // Verifica se o clique foi fora do conteúdo do modal
    if (e.target.classList.contains("modal-background")) {
      FecharModal();
    }
  };

  // mensagem de carregamento
  if (loading) {
    return <ModalLoading message="Carregando..." />;
  }

  // mensagem de erro
  if (error) {
    return <ModalLoading message={error} />;
  }

  return (
    <div>
      <Navbar />
      <div className="container px-4">
        <h2 style={{ marginTop: "5rem" }}>
          Notas - Classe {alunosStatus[0]?.serie_classe}
        </h2>
        <div className="container">
          <ul className="list-group mt-1">
            {alunosStatus.map((aluno, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center col-12 col-md-4">
                  <span
                    className="ms-3 cursor-pointer text-truncate"
                    style={{ maxWidth: "150px" }}
                  >
                    {aluno.nome}
                  </span>
                </div>
                <div className="d-flex justify-content-center align-items-center col-12 col-md-4">
                  <div className="d-flex justify-content-center w-100">
                    {aluno.mencoes.map((mencao, bimestreIndex) => (
                      <div key={bimestreIndex} className="me-3">
                        <select
                          className="form-select"
                          value={mencao}
                          onChange={(e) =>
                            atualizarMencao(
                              index,
                              bimestreIndex,
                              e.target.value
                            )
                          }
                          style={{ width: "120px" }}
                        >
                          <option value="">Em espera</option>
                          <option value="MB">MB</option>
                          <option value="B">B</option>
                          <option value="R">R</option>
                          <option value="I">I</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => DadosAluno(aluno)}
                  >
                    <i className="bi bi-info-circle"></i>{" "}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-success"
              onClick={adicionarMencao}
              disabled={alunosStatus.some((aluno) => aluno.mencoes.length >= 5)}
            >
              Adicionar Menção
            </button>
            <button className="btn btn-danger" onClick={removerMencao}>
              Remover Última Menção
            </button>
            <button
              className="btn btn-primary"
              onClick={() => console.log("Notas salvas:", alunosStatus)}
            >
              Salvar Notas
            </button>
          </div>
        </div>
        <ModalStudent
          modalInfo={modalInfo}
          FecharModal={FecharModal}
          ClicarFora={ClicarFora}
        />
      </div>
      <Orion />
    </div>
  );
}
