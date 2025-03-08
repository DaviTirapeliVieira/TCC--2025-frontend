// Tela de cadastro de aluno.

import FormEstudante from "../components/cadAluno/formEstudante";
import { Voltar } from "../components/button";

export default function CadastroAluno() {
  return (
    <div className="background">
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className="card p-4 position-relative container-back">
          <Voltar />
          <div className="row">
            <h1 className="text-start fw-bold mb-4">Cadastro de Aluno</h1>
            <FormEstudante />
          </div>
        </div>
      </div>
    </div>
  );
}
