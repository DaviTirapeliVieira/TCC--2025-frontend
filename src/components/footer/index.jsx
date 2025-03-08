import { Link } from 'react-router-dom';

export function Rodape() {
    return(
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="text-center">
                    <Link to="https://sp.gov.br/sp"><img className="mb-3" src="./logo-sp-rodape.png" alt="logo-sp" /></Link>
                    <p className="mt-3">&copy; 2025 NSA WEB Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}