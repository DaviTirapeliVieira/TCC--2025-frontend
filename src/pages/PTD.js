// PTD screen

import { useState, useEffect } from "react";
import {
  getDisciplinas,
  getCursos,
  getSeries,
  salvarPTD,
} from "../connection/ptdService";
import { Navbar } from "../components/navbar";
import { Orion } from "../components/Orion/modal/index";

export default function PTDForm() {
  const [formData, setFormData] = useState({
    data: "",
    disciplina: "",
    curso: "",
    serie: "",
    atividades: "",
    observacoes: "",
  });

  const [ptds, setPtds] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const UserId = localStorage.getItem("UserId");
    if (!UserId) return;

    getDisciplinas(UserId).then((res) => setDisciplinas(res.data));
    getCursos(UserId).then((res) => setCursos(res.data));
    getSeries(UserId).then((res) => setSeries(res.data));
  }, []);

  const tratarMudanca = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const tratarEnvio = (e) => {
    e.preventDefault();

    const UserId = localStorage.getItem("UserId");
    const dadosParaEnviar = {
      ...formData,
      UserId,
    };

    salvarPTD(dadosParaEnviar)
      .then(() => {
        setPtds([...ptds, dadosParaEnviar]);
        setFormData({
          data: "",
          disciplina: "",
          curso: "",
          serie: "",
          atividades: "",
          observacoes: "",
        });
      })
      .catch((error) => console.error("Erro ao salvar PTD:", error));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-3">
        <form onSubmit={tratarEnvio} className="p-4 shadow-sm rounded bg-white">
          <h2 className="mb-4">Formulario de PTD</h2>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="data" className="form-label">
                Data:
              </label>
              <input
                type="date"
                id="data"
                className="form-control"
                value={formData.data}
                onChange={tratarMudanca}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="disciplina" className="form-label">
                Disciplina:
              </label>
              <select
                id="disciplina"
                className="form-select"
                value={formData.disciplina}
                onChange={tratarMudanca}
                required
              >
                <option value="">Selecione</option>
                {disciplinas.map((disciplina) => (
                  <option key={disciplina.id} value={disciplina.nome}>
                    {disciplina.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mt-2">
              <label htmlFor="curso" className="form-label">
                Curso:
              </label>
              <select
                id="curso"
                className="form-select"
                value={formData.curso}
                onChange={tratarMudanca}
                required
              >
                <option value="">Selecione</option>
                {cursos.map((curso) => (
                  <option key={curso.id} value={curso.nome}>
                    {curso.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mt-2">
              <label htmlFor="serie" className="form-label">
                Série:
              </label>
              <select
                id="serie"
                className="form-select"
                value={formData.serie}
                onChange={tratarMudanca}
                required
              >
                <option value="">Selecione</option>
                {series.map((serie) => (
                  <option key={serie.id} value={serie.nome}>
                    {serie.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="atividades" className="form-label">
              Atividades Planejadas:
            </label>
            <textarea
              id="atividades"
              className="form-control"
              rows="3"
              value={formData.atividades}
              onChange={tratarMudanca}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="observacoes" className="form-label">
              Observações:
            </label>
            <textarea
              id="observacoes"
              className="form-control"
              rows="2"
              value={formData.observacoes}
              onChange={tratarMudanca}
            ></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </form>
      </div>
      <Orion />
    </div>
  );
}
