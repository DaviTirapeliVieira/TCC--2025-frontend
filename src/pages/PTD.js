// PTD screen

import React, { useState } from "react";
import { Navbar } from "../components/navbarOn";
import { Orion } from "../components/Orion/modal/index";

export default function PTDForm() {
  const [formData, setFormData] = useState({
    data: "",
    turno: "",
    atividades: "",
    responsaveis: "",
    metas: "",
    observacoes: "",
  });

  const [ptds, setPtds] = useState([]);

  const tratarMudanca = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const tratarEnvio = (e) => {
    e.preventDefault();
    setPtds([...ptds, formData]);
    setFormData({
      data: "",
      turno: "",
      atividades: "",
      responsaveis: "",
      metas: "",
      observacoes: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <form onSubmit={tratarEnvio} className="p-4 shadow-sm rounded bg-white">
          <h2 className="mb-4">Formulario de PTD</h2>

          <div className="mb-3">
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

          <div className="mb-3">
            <label htmlFor="turno" className="form-label">
              Turno:
            </label>
            <select
              id="turno"
              className="form-select"
              value={formData.turno}
              onChange={tratarMudanca}
              required
            >
              <option value="">Selecione</option>
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
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
            <label htmlFor="responsaveis" className="form-label">
              Responsáveis:
            </label>
            <input
              type="text"
              id="responsaveis"
              className="form-control"
              value={formData.responsaveis}
              onChange={tratarMudanca}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="metas" className="form-label">
              Metas:
            </label>
            <textarea
              id="metas"
              className="form-control"
              rows="2"
              value={formData.metas}
              onChange={tratarMudanca}
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
              Salvar PTD
            </button>
          </div>
        </form>
      </div>
      <Orion />
    </div>
  );
};