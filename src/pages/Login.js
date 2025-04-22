// Tela de Login

import { FormularioLogin } from "../components/login/formLogin";
import { Autenticador } from "../components/login/autenticador";

export default function Login() {
  return (
    <div className="background">
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="card card-login p-4 container-back w-75">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-start mb-4">Entrar</h2>
              <FormularioLogin />
            </div>
            <Autenticador />
          </div>
        </div>
      </div>
    </div>
  );
}
