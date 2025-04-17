import { Link} from "react-router-dom";
import "./style.css";

export function Navbar() {


  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          NSA WEB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              NSA
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/user"
                >
                  <i className="bi bi-house me-2"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item fs-5 dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-book me-2"></i>
                  Principais
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/chamada">
                      Chamada
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/nota">
                      Notas
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Ocorrencia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item fs-5 dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-cloud-download me-2"></i>
                  Cadastros
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/cadastro-aluno">
                      Cadastrar Aluno
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cadastro-classe">
                      Cadastrar Classe
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Cadastrar Professor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item fs-5 ">
                <Link className="nav-link" to="#">
                  <i className="bi bi-gear me-2"></i>
                  Configurações
                </Link>
              </li>
              <li className="nav-item fs-5 position-fixed bottom-0 end-0 p-3">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  <i class="bi bi-box-arrow-right me-2"></i>
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
