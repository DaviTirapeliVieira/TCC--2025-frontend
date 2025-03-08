import React, { useEffect, useState } from "react";
import { NoticiasService } from "../../../connection/noticiasService";
import { Link } from "react-router-dom";

export function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const carregarNoticias = async () => {
      const dados = await NoticiasService();
      setNoticias(dados); // Atualiza o estado com os dados da API
    };

    carregarNoticias();
  }, []);

  return (
    <>
      <div className="row">
        {noticias.length > 0 ? (
          noticias.map((noticia) => (
            <div key={noticia.id} className="col-md-4 mt-2">
              <div className="card shadow hover-shadow">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/noticia/${noticia.id}`}
                >
                  <img
                    src={noticia.imagem}
                    className="card-img-top"
                    alt={noticia.titulo}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{noticia.titulo}</h5>
                    <p className="card-text">{noticia.descricao}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Última atualização: {noticia.data}
                      </small>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Carregando notícias...</p>
        )}
      </div>

      <div className="text-center mt-5">
        <Link className="btn btn-outline-danger" to="/noticias">
          + Notícias
        </Link>
      </div>
    </>
  );
}
