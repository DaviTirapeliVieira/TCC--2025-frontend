// Call screen

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Orion } from "../components/Orion/modal/index";
import { ChamadaService } from "../connection/chamadaService";
import ModalStudent from "../components/modalStudent/modal.jsx";
import ModalLoading from "../components/modalLoading/index.jsx";

export default function Chamada() {
  const [alunos, setAlunos] = useState([]);
  // Student information in modal
  const [modalInfo, setModalInfo] = useState(null);
  // Student selected
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Ref for the checkboxes
  const checkboxesRef = useRef([]);
  // presence of students
  const [presenca, setPresenca] = useState({});
  // loading control
  const [loading, setLoading] = useState(true);
  // errors
  const [error, setError] = useState(null);

  useEffect(() => {
    const alunosInfo = async () => {
      try {
        const response = await ChamadaService();
        setAlunos(response.data);
        setPresenca(
          response.data.reduce((acc, alunos) => {
            acc[alunos.nome] = false;
            return acc;
          }, {})
        );
        setLoading(false); // the request has finished
      } catch (error) {
        setError("Erro ao carregar os dados da chamada");
        setLoading(false); // the request has finished
      }
    };

    alunosInfo();
  }, []);

  // Mark or unmark attendance
  const MarcarPresenca = (nome) => {
    setPresenca((prevPresenca) => {
      const novaPresenca = { ...prevPresenca, [nome]: !prevPresenca[nome] };
      ChamadaService(novaPresenca);
      return novaPresenca;
    });
  };

  // Open the student modal
  const DadosAluno = (aluno) => {
    setModalInfo(aluno);
  };

  // Close the modal
  const FecharModal = () => {
    setModalInfo(null);
  };

  // close modal on click outside
  const ClicarFora = (e) => {
    // Checks if the click was outside the modal content
    if (e.target.classList.contains("modal-background")) {
      FecharModal();
    }
  };

  // Select the student using the arrow
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

  // loading message
  if (loading) {
    return <ModalLoading message="Carregando..." />;
  }

  // error message
  if (error) {
    return <ModalLoading message={error} />;
  }

  return (
    <div>
      <Navbar />
      <div className="container px-4">
        <h2>
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
                    onChange={() => MarcarPresenca(aluno.nome)} // Updates the presence status
                    ref={(el) => (checkboxesRef.current[index] = el)}
                  />
                  <span className="ms-3 cursor-pointer">{aluno.nome}</span>
                </div>
                <button
                  className="btn btn-info btn-sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents clicking the button from also triggering the list's onClick
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
          <ModalStudent
            modalInfo={modalInfo}
            FecharModal={FecharModal}
            ClicarFora={ClicarFora}
          />
        </div>
      </div>
      <Orion />
    </div>
  );
}
