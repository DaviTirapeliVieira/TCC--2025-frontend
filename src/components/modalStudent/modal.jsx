import "./style.css";

const ModalStudent = ({ modalInfo, FecharModal, ClicarFora }) => {
  if (!modalInfo) return null;

  return (
    <div
      className="modal fade show d-block modal-background"
      onClick={ClicarFora}
      id="studentModal"
      tabIndex="-1"
      aria-labelledby="studentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog float-end mt-5 me-4">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title" id="studentModalLabel">
              Aluno
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={FecharModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-3">
              <img
                className="img-fluid rounded-circle img-student"
                src={modalInfo.foto}
                alt={modalInfo.nome}
              />
            </div>
            <p>
              <strong>Nome:</strong> {modalInfo.nome}f{" "}
            </p>
            <p>
              <strong>Idade:</strong> {modalInfo.idade}
            </p>
            <p>
              <strong>Série/Classe:</strong> {modalInfo.serie_classe}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStudent;
