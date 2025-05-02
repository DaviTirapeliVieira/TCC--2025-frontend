// Student Registration Form

import { InputCPF } from "../inputCPF";
import { InputImagem } from "../inputImagem";
import { InputNome } from "../inputNome";
import { InputTel } from "../inputTel";

export default function FormEstudante() {
  return (
    <form>
      <InputNome />
      <InputCPF />
      <InputTel />
      <InputImagem />
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary fw-bold"
          id="btn-cad-aluno"
        >
          Registrar
        </button>
      </div>
    </form>
  );
}
