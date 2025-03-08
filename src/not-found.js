import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div className="custom-bg text-dark">
            <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-2 fw-medium mt-4">Foi mal, Página não encontrada</p>
                    <p className="mt-4 mb-5">Lamentamos o inconveniente</p>
                    <Link className='btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn' to='/'>Voltar para Home</Link>
                </div>
            </div> 
        </div>
    );
}