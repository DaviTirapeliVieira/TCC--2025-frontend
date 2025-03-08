// NÃO UTILIZADO, FEIO DE MAIS

import { Link } from "react-router-dom";
import './style.css'

export function NavbarInferior() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary zindex-1 nav-margin">
            <div className="container">
                <div className="navbar-brand me-5" to="#">NSA</div>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >   
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Institucional
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Legislação</Link></li>
                                <li><Link className="dropdown-item" to="#">Fale Conosco</Link></li>
                                <li><Link className="dropdown-item" to="#">Funções e Competências</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Canais de Comunicação
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Ouvidoria</Link></li>
                                <li><Link className="dropdown-item" to="#">Perguntas Frequentes</Link></li>
                                <li><Link className="dropdown-item" to="#">Atendimento à Imprensa</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true">Campanhas</Link>
                        </li>
                    </ul>
                    <form className="d-flex form-margin" role="search">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Busque</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}