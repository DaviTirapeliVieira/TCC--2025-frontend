import { Link } from "react-router-dom";
import './style.css'

export function Voltar() {
    return (
        <Link to="/user">
            <button className="btn btn-outline-danger position-absolute btn-voltar" id='output'>
            Voltar
            </button>
        </Link>
    );
}