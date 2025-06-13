import { useEffect, useRef, useState } from "react";
import "./style.css";

export function Autenticador() {
  const videoRef = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraStarted(true);
      }
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
      alert(`Erro ao acessar a câmera: ${error.name} - ${error.message}`);
    }
  };

  useEffect(() => {
    startCamera();

    const videoElement = videoRef.current;

    return () => {
      if (videoElement?.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="col-md-6 d-flex flex-column align-items-center mt-2">
      <h6 className="text-center mb-3">Entrar com o Autenticador Visual</h6>
      {!cameraStarted ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p className="text-muted">Carregando câmera...</p>
        </div>
      ) : (
        <div className="video-face mt-4 mb-4">
          <video ref={videoRef} />
        </div>
      )}

      {/*
      <button
        onClick={startCamera}
        className="btn btn-primary fw-bold text-center text-decoration-none w-50 mt-auto"
      >
        Entrar com faceID
      </button>
      */}
    </div>
  );
}
