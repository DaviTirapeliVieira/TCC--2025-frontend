// Formulario de cadastro de Aluno

import { InputCPF } from '../inputCPF';
import { InputImagem } from '../inputImagem';
import { InputNome } from '../inputNome';
import { InputTel } from '../inputTel';
 
export default function FormEstudante() {
    return(
        <form>
            <InputNome />
            <InputCPF />
            <InputTel />
            <InputImagem />
            <button type="submit" className="btn btn-primary fw-bold w-100" id='btn-cad-aluno'>Registrar</button>
        </form>
    );
}