import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbarOn";
import { Orion } from "../components/Orion/modal/index";
import { DadosAlunos } from "../connection/notaService";

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
        const dados = await DadosAlunos();
        setAlunosStatus(dados);
        setLoading(false); // a requisição terminou
      } catch (err) {
        setError("Erro ao carregar os dados dos alunos");
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

  // mensagem de carregamento
  if (loading) {
    return <div>Carregando...</div>
  }

  // mensagem de erro
  if (error) {
    return <div>{error}</div>;
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

        {modalInfo && (
          <div
            className="d-block modal fade show"
            id="modal-aluno"
            tabIndex="-1"
            aria-labelledby="label-modal-aluno"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="label-modal-aluno">
                    Informações do Aluno
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={FecharModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src={modalInfo.foto}
                      alt={modalInfo.nome}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p>
                    <strong>Nome:</strong> {modalInfo.nome}
                  </p>
                  <p>
                    <strong>Idade:</strong> {modalInfo.idade}
                  </p>
                  <p>
                    <strong>Serie/Classe:</strong> {modalInfo.serie_classe}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Orion />
    </div>
  );
}
