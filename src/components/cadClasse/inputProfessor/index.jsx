// Teacher's name registration (input) field

export function InputNameProf() {
    return (
        <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome do Professor Responsável</label>
            <input type="text" className="form-control" id="name" name="name" required/>
            <span id="span-error-name-prof"></span>
        </div>
    );
}