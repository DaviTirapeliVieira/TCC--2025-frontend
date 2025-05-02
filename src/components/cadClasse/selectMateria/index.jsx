// Subject selection field

export function SelectMateria() {
    return(
        <div className="mb-3">
            <label htmlFor="options" className="form-label">Escolha uma Curso</label>
                <select className="form-control" id="options" name="options" required>
                    <option value="">Selecione...</option>
                    <option value="opcao1">Desenvolvimento de Sistemas</option>
                    <option value="opcao2">Agropecuaria</option>
                    <option value="opcao3">Linguagens</option>
                </select>
                <span id="span-error-select-materia"></span>
        </div>
    );
}