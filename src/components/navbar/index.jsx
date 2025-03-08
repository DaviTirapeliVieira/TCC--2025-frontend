import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarAvisos, buscarEventos, buscarNovidades } from "../../connection/navbarService";
import "./style.css";

export function Navbar() {
  const [avisos, setAvisos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [novidades, setNovidades] = useState([]);
  const [usuario, setUsuario] = useState(null);

  // Verifica se tem usuario logado no localStorage
  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    }
  }, []);

  // Carregar dados da navbar
  useEffect(() => {
    async function carregarDados() {
      setAvisos(await buscarAvisos());
      setEventos(await buscarEventos());
      setNovidades(await buscarNovidades());
    }
    carregarDados();
  }, []);

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
          tabIndex="-1"
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
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="bi bi-house me-2"></i>Home
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
                  {avisos.map((aviso) => (
                    <li key={aviso.id}>
                      <Link className="dropdown-item" to="#">
                        {aviso.titulo}
                      </Link>
                    </li>
                  ))}
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
                  {eventos.map((evento) => (
                    <li key={evento.id}>
                      <Link className="dropdown-item" to="#">
                        {evento.nome}
                      </Link>
                    </li>
                  ))}
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
                  {novidades.map((novidade) => (
                    <li key={novidade.id}>
                      <Link className="dropdown-item" to="#">
                        {novidade.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item fs-5">
                {usuario ? (
                  <>
                    <form className="d-flex mt-2" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="O que deseja Buscar?"
                        aria-label="Search"
                      ></input>
                      <button className="btn btn-outline-success" type="submit">
                        Busque
                      </button>
                    </form>
                    <div class="d-flex align-items-center bg-white p-3 rounded shadow-sm margin-perfil">
                      <img
                        src="foto.jpg"
                        alt="Foto"
                        className="rounded-circle foto-user"
                      />
                      <div>
                        <p className="mb-0 fw-bold">Seu Nome</p>
                        <p className="mb-0 text-muted">seuemail@dominio.com</p>
                      </div>
                    </div>
                    <Link
                      className="nav-link mt-2"
                      to="#"
                      onClick={() => {
                        localStorage.removeItem("usuario");
                        setUsuario(null);
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      <strong>Logout ({usuario.nome})</strong>
                    </Link>
                  </>
                ) : (
                <>
                  <Link className="nav-link" to="/login">
                    <i className="bi bi-door-open me-2"></i>
                    <strong>Login</strong>
                  </Link>
                  <form className="d-flex mt-2" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="O que deseja Buscar?"
                        aria-label="Search"
                      ></input>
                      <button className="btn btn-outline-success" type="submit">
                        Busque
                      </button>
                    </form>
                </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
