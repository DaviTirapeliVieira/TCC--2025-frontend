// Formulario de cadastro de Turma

import { InputClasse } from "../inputClasse";
import { InputNameProf } from "../inputProfessor";
import { SelectMateria } from "../selectMateria";

export default function FormClasse() {
    return(
        <form>
            <InputClasse />
            <InputNameProf />
            <SelectMateria />
            <button type="submit" className="btn btn-primary fw-bold w-100" id='btn-cad-classe'>Registrar</button>
        </form>
    );
}