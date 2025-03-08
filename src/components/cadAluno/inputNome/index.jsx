// Input do Nome do Aluno

export function InputNome() {
    return (
        <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" name="name" required/>
            <span id="span-error-nome"></span>
        </div>
    );
}