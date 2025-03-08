import React, { useState } from "react";

export function InputSenha() {
  const [inputFocado, setInputFocado] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [inputValor, setInputValor] = useState('');
  const VerSenha = () => setSenhaVisivel(!senhaVisivel);

  const manterFoco = (e) => {
    e.preventDefault(); 
    VerSenha();
  };

  return (
    <div className="form-floating mb-3">
        <input 
          type={senhaVisivel ? "text" : "password"} 
          className="form-control rounded-3" 
          id="password"
          placeholder="Senha"
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
          onFocus={() => setInputFocado(true)} 
          onBlur={() => setInputFocado(false)} 
        />
        <label htmlFor="password">Senha</label>
          {(inputValor.length > 0 || inputFocado) && (
            <i className={`bi ${senhaVisivel ? "bi-eye-slash-fill" : "bi-eye-fill"} position-absolute top-50 end-0 translate-middle-y zindex-5 me-3`} 
              type="button" 
              onClick={manterFoco}
            >
            </i>
          )}
        <span id="span-password" className="fs-5 fw-bold text-danger"></span> 
    </div>
  );
}
