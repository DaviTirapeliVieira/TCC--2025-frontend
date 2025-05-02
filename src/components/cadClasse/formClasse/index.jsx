// Class Registration Form

import { InputClasse } from "../inputClasse";
import { InputNameProf } from "../inputProfessor";
import { SelectMateria } from "../selectMateria";

export default function FormClasse() {
  return (
    <form>
      <InputClasse />
      <InputNameProf />
      <SelectMateria />
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-primary fw-bold"
          id="btn-cad-classe"
        >
          Registrar
        </button>
      </div>
    </form>
  );
}
