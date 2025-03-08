// Posicionamento da imagem do usuario

import React from "react";

export function ImagemUsuario({ fotoUrl }) {
  if (!fotoUrl) {
    return <div>Foto não encontrada</div>
  }

  return (
      <div className="mt-2 col-md-4 d-flex justify-content-center align-items-start">
        <img
          src={fotoUrl}
          alt="Foto do Usuario"
          className= "img-fluid rounded shadow"
          width={150}
          height={150}
        />
      </div>
  );
}
  