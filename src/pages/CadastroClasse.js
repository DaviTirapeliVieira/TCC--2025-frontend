// Class registration screen.

import FormClasse from "../components/cadClasse/formClasse";
import { Navbar } from "../components/navbar";

export default function CadastroClasse() {
  return (
    <div className="background">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className="card p-4 position-relative container-back">
          <div className="row">
            <h1 className="text-start mb-4">Cadastro de Classe</h1>
            <FormClasse />
          </div>
        </div>
      </div>
    </div>
  );
}
