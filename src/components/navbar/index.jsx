import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalConfig from "../modalConfig/index";
import "./style.css";

export function Navbar() {
  const [usuario, setUsuario] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);

  // Checking to see if the user is logged in
  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    }
  }, []);

  return (
    <>
      {usuario ? (
        <>
          <nav
            className={`navbar fixed-top  ${darkMode ? "bg-dark" : "bg-light"}`}
          >
            <div className="container-fluid">
              <div
                className={`navbar-brand ${
                  darkMode ? "title-dark" : "title-light"
                }`}
              >
                NSA WEB
              </div>
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <i
                  class={`bi bi-list fs-5  ${darkMode ? "icon-dark" : ""}`}
                ></i>
              </button>
              <div
                className={`offcanvas offcanvas-end ${
                  darkMode ? "offcanvas-dark" : ""
                }`}
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header d-flex justify-content-between align-items-center w-100 top-0 mt-2 pe-3">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    NSA
                  </h5>
                  <div
                    type="button"
                    className="btn-c"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i class="bi bi-box-arrow-in-up-right fs-5"></i>
                  </div>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item fs-5">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <i className="bi bi-house me-2"></i>Inicial
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
                    <li className="nav-item fs-5 dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-info-circle me-2"></i>
                        Informações Escolares
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/calendario">
                            Calendario Escolar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/grafico-presenca"
                          >
                            Grafico de Frequencia
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider"></hr>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/ptd-form">
                            PTD
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item fs-5">
                      <Link
                        className="nav-link"
                        to="/login"
                        onClick={() => {
                          localStorage.removeItem("usuario");
                          setUsuario(null);
                        }}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        <strong>Sair</strong>
                      </Link>
                    </li>
                    <footer className="d-flex position-absolute justify-content-between align-items-center w-100 bottom-0 mb-2 pe-5">
                      <div className="bg-white rounded shadow-sm w-75 p-3">
                        <Link
                          to="/user"
                          className="d-flex align-items-center text-decoration-none"
                        >
                          <img
                            src={usuario.foto}
                            alt="image-user"
                            className="rounded-circle foto-user"
                          />
                          <div>
                            <p className="mb-0 text-dark fw-bold">
                              {usuario.nome}
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="text-decoration-none fs-5">
                        <Link className="nav-link" to="/configuracoes">
                          <i className="bi bi-gear"></i>
                        </Link>
                      </div>
                    </footer>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav
            className={`navbar fixed-top  ${darkMode ? "bg-dark" : "bg-light"}`}
          >
            <div className="container-fluid">
              <div className={`navbar-brand ${darkMode ? "title-dark" : ""}`}>
                NSA WEB
              </div>
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <i
                  class={`bi bi-list fs-5  ${darkMode ? "icon-dark" : ""}`}
                ></i>
              </button>
              <div
                className={`offcanvas offcanvas-end ${
                  darkMode ? "offcanvas-dark" : ""
                }`}
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header d-flex justify-content-between align-items-center w-100 top-0 mt-2 pe-3">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    NSA
                  </h5>
                  <div
                    type="button"
                    className="btn-c"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i class="bi bi-box-arrow-in-up-right fs-5"></i>
                  </div>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item fs-5">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <i className="bi bi-house me-2"></i>Inicial
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
                        <i className="bi bi-backpack me-2"></i>Etec
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/avisos">
                            Avisos
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/eventos">
                            Eventos
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
                        <i className="bi bi-mortarboard me-2"></i>Fatec
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/avisos">
                            Avisos
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/eventos">
                            Eventos
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
                        <i className="bi bi-buildings me-2"></i>CPS
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/avisos">
                            Avisos
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/eventos">
                            Eventos
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item fs-5">
                      <Link className="nav-link" to="/login">
                        <i className="bi bi-door-open me-2"></i>
                        <strong>Login</strong>
                      </Link>
                    </li>
                    <form className="d-flex mt-4" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="O que deseja Buscar?"
                        aria-label="Search"
                      ></input>
                      <button className="btn btn-outline-danger" type="submit">
                        <i class="bi bi-search"></i>
                      </button>
                    </form>
                    <div className="d-flex align-items-center w-100 bottom-0 mb-2 pe-5">
                      <ModalConfig
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                      />
                    </div>
                    <div className="d-flex position-absolute align-items-center w-100 bottom-0 mb-2 pe-5">
                      <div className="text-decoration-none fs-5">
                        <button
                          className="nav-link btn btn-link"
                          onClick={() => setShowModal(true)}
                        >
                          <i className="bi bi-gear"></i>
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
