// Input de Telefone do Aluno

export function InputTel() {
    return(
    <div className="mb-3">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input type="text" className="form-control" id='telefone' name='telefone' required></input>
        <span id="span-error-tel"></span>
    </div>
    );
}
