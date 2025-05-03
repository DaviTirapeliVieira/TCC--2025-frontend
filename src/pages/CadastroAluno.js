// Student registration screen.

import FormEstudante from "../components/cadAluno/formEstudante";
import { Navbar } from "../components/navbar";

export default function CadastroAluno() {
  return (
    <div className="background">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className="card p-4 position-relative container-back">
          <div className="row">
            <h1 className="text-start mb-4">Cadastro de Aluno</h1>
            <FormEstudante />
          </div>
        </div>
      </div>
    </div>
  );
}
