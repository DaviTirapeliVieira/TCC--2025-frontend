import { useEffect, useState } from "react";
import api from "../../../connection/api";

export function AutoCarrossel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // search for images
    const ImagensCarrosel = async () => {
      try {
        const response = await api.get("/imagens_carrosel");
        setImages(response.data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    };

    ImagensCarrosel();
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carossel-slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}