// Tela de cadastro de classe.

import FormClasse from "../components/cadClasse/formClasse";
import { Voltar } from "../components/button";

export default function CadastroClasse() {
  return (
    <div className="background">
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className="card p-4 position-relative container-back">
          <Voltar />
          <div className="row">
            <h1 className="text-start fw-bold mb-4">Cadastro de Classe</h1>
            <FormClasse />
          </div>
        </div>
      </div>
    </div>
  );
}
