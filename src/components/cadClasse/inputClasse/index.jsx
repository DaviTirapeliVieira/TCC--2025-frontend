// Input do nome da Turma

export function InputClasse() {
    return (
        <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome da Classe</label>
            <input type="text" className="form-control" id="name" name="name" required/>
            <span id="span-error-classe"></span>
        </div>
    );
}