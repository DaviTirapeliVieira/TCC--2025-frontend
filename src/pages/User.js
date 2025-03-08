// Tela com as informações do Usuario

import { Navbar } from "../components/navbarOn";
import { InformacaoUsuario } from "../components/user/informacaoUsuario";
import { Orion } from "../components/Orion/modal/index";

export default function User() {
  return (
    <div className="background">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
        <div className="card p-4 position-relative container-back w-50">
          <div className="row">
            <InformacaoUsuario />
          </div>
        </div>
      </div>
      <Orion />
    </div>
  );
}
