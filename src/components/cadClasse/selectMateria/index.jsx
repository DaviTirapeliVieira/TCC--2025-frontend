// Select de seleção da Disciplina

export function SelectMateria() {
    return(
        <div className="mb-3">
            <label htmlFor="options" className="form-label">Escolha uma Disciplina</label>
                <select className="form-control" id="options" name="options" required>
                    <option value="">Selecione...</option>
                    <option value="opcao1">Portugues</option>
                    <option value="opcao2">Matematica</option>
                    <option value="opcao3">Biologia</option>
                    <option value="opcao4">Historia</option>
                </select>
                <span id="span-error-select-materia"></span>
        </div>
    );
}