// Student CPF Input

export function InputCPF() {
    return (
        <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input type="CPF" className="form-control" id="cpf" name="cpf" required/>
            <span id="span-error-cpf"></span>
        </div>
    );
}
