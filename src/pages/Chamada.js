import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "../components/navbarOn";
import { Orion } from "../components/Orion/modal/index";
import { ChamadaService } from "../connection/chamadaService";
import ModalStudent from "../components/modalStudent/modal.jsx";
import ModalLoading from "../components/modalLoading/index.jsx";

export default function Chamada() {
  const [alunos, setAlunos] = useState([]);
  // Informações do aluno no modal
  const [modalInfo, setModalInfo] = useState(null);
  // Aluno selecionado
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Ref para os checkboxes
  const checkboxesRef = useRef([]);
  // presença dos alunos
  const [presenca, setPresenca] = useState({});
  // controle de loading
  const [loading, setLoading] = useState(true);
  // erros
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
        setLoading(false); // a requisição terminou
      } catch (error) {
        setError("Erro ao carregar os dados da chamada");
        setLoading(false); // a requisição terminou
      }
    };

    alunosInfo();
  }, []);

  // Marca ou desmarcar presença
  const MarcarPresenca = (nome) => {
    setPresenca((prevPresenca) => {
      const novaPresenca = { ...prevPresenca, [nome]: !prevPresenca[nome] };
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

  // fecha o modal ao clicar fora
  const ClicarFora = (e) => {
    // Verifica se o clique foi fora do conteúdo do modal
    if (e.target.classList.contains("modal-background")) {
      FecharModal();
    }
  };

  // Seleciona o aluno usando a seta
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
