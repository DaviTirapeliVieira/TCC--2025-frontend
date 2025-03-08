import React, { useState, useRef } from "react";
import { Navbar } from "../components/navbarOn";
import { Orion } from "../components/Orion/modal/index";
import ChamadaService from "../connection/chamadaService"; // Importando o serviço

export default function Chamada() {
  // Dados dos alunos
  const alunos = [
    {
      nome: "Davi Vieira",
      idade: "16 anos",
      serie_classe: "3ºDS",
      foto: "./user.jpg",
      mencoes: ["", "", ""],
    },
    {
      nome: "Luis",
      idade: "18 anos",
      serie_classe: "3ºDS",
      foto: "",
      mencoes: ["", "", ""],
    },
    {
      nome: "João",
      idade: "30 anos",
      serie_classe: "",
      foto: "",
      mencoes: ["", "", ""],
    },
  ];

  // Informações do aluno no modal
  const [modalInfo, setModalInfo] = useState(null);
  // Aluno selecionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Ref para os checkboxes
  const checkboxesRef = useRef([]);

  // Controlar a presença dos alunos
  const [presenca, setPresenca] = useState(
    alunos.reduce((acc, aluno) => {
      acc[aluno.nome] = false; // Inicia com todos como ausentes
      return acc;
    }, {})
  );

  // Marcar ou desmarcar presença
  const MarcarPresenca = (nome) => {
    setPresenca((prevPresenca) => {
      const novaPresenca = { ...prevPresenca, [nome]: !prevPresenca[nome] };
      // Chamar o serviço para enviar os dados de presença ao backend
      ChamadaService(novaPresenca);
      return novaPresenca;
    });
  };

  // Abre o modal do aluno
  const DadosAluno = (aluno) => {
    setModalInfo(aluno);
  };

  // Fecha o modal
  const FecharModal = () => {
    setModalInfo(null);
  };

  // Selecionar o aluno usando a seta
  const MoverComSeta = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % alunos.length);
    }
    if (e.key === "ArrowUp") {
      setSelectedIndex(
        (prevIndex) => (prevIndex - 1 + alunos.length) % alunos.length
      );
    }
    if (e.key === "Enter") {
      MarcarPresenca(alunos[selectedIndex].nome); // Muda a presença ao pressionar Enter
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container px-4">
        <h2 style={{ marginTop: "5rem" }}>
          Chamada - Classe {alunos[0]?.serie_classe}
        </h2>
        <div className="container" tabIndex="0" onKeyDown={MoverComSeta}>
          <ul className="list-group mt-1">
            {alunos.map((aluno, index) => (
              <li
                key={index}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  selectedIndex === index ? "bg-light" : ""
                }`}
              >
                <div className="d-flex align-items-center col-12 col-md-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={presenca[aluno.nome]}
                    onChange={() => MarcarPresenca(aluno.nome)} // Atualiza o estado da presença
                    ref={(el) => (checkboxesRef.current[index] = el)}
                  />
                  <span className="ms-3 cursor-pointer">{aluno.nome}</span>
                </div>
                <button
                  className="btn btn-info btn-sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Impede que o clique no botão também acione o onClick da lista
                    DadosAluno(aluno);
                  }}
                >
                  <i className="bi bi-info-circle"></i>{" "}
                </button>
              </li>
            ))}
          </ul>

          <button className="d-flex ms-auto btn btn-primary mt-3">
            Salvar Chamada
          </button>

          {modalInfo && (
            <div
              className="modal fade show"
              id="studentModal"
              tabIndex="-1"
              style={{ display: "block" }}
              aria-labelledby="studentModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="studentModalLabel">
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
      </div>
      <Orion />
    </div>
  );
}
