// Student User Photo Input

export function InputImagem() {
    return(
        <div className="mb-3">
            <label htmlFor="foto" className="form-label">Foto</label>
            <input type="file" className="form-control" id='foto' name='foto' accept="image/*" required/>
            <span id="span-error-imagem"></span>
        </div>
    );
}
