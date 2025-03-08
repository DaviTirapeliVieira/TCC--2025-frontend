import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { InputEmail } from "../inputEmail";
import { InputSenha } from "../inputSenha";
import { LembreMe } from "../lembreMe";
import { AutRota } from "../../../api/Autenticador";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../../connection/loginService";

export function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembreMe, setLembreMe] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AutRota);
  const navigate = useNavigate();

  const LoginOperation = async (e) => {
    e.preventDefault();

    // Operação de login
    try {
      const response = await loginService(email, senha);
      if (response && response.token) {
        login(response.token); // função de login passando o token
        navigate("/user");
      } else {
        setError("Usuário ou senha inválidos"); // se não tiver token
      }
    } catch (err) {
      setError("Erro ao fazer login. Tente novamente!"); // se tiver erro na requisição
    }
  };

  return (
    <form onSubmit={LoginOperation}>
      <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputSenha value={senha} onChange={(e) => setSenha(e.target.value)} />
      <LembreMe checked={lembreMe} onChange={() => setLembreMe(!lembreMe)} />
      <button
        type="submit"
        className="btn btn-primary fw-bold w-100"
        id="btn-login"
      >
        Entrar
      </button>
      <Link
        to="/reset-password"
        className="d-block text-center text-decoration-none text-dark mt-3"
      >
        Esqueci minha senha
      </Link>
      {error && <div className="alert alert-danger mt-3 d-flex justify-content-center">{error}</div>}
    </form>
  );
}
