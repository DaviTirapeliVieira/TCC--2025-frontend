import { Link } from "react-router-dom";

const ModalLoading = ({ message }) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative">
      <div className="card p-4 position-relative container-back w-50">
        <div className="row">
          <div>{message}</div>
        </div>
        <Link className="text-black fw-bold text-decoration-none mt-3" to="/user">
          <i class="bi bi-box-arrow-right me-2"></i>
          Voltar a Home
        </Link>
      </div>
    </div>
  );
};

export default ModalLoading;
