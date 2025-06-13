import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputEmail } from "../inputEmail";
import { InputSenha } from "../inputSenha";
import { LembreMe } from "../lembreMe";
import { loginService } from "../../../connection/loginService";

export function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembreMe, setLembreMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const LoginOperation = async (e) => {
    e.preventDefault();

    try {
      const sucesso = await loginService(email, senha);
      if (sucesso) {
        navigate("/user");
      } else {
        setError("Usuário ou senha inválidos");
      }
    } catch (err) {
      setError("Erro ao fazer login. Tente novamente!");
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
      {error && (
        <div className="alert alert-danger mt-3 d-flex justify-content-center">
          {error}
        </div>
      )}
    </form>
  );
}
