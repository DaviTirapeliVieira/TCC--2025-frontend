import React, { useState } from "react";
import { ChatService } from "../../../connection/OrionService";
import "./style.css";

export function Orion() {
  const [mostrarModal, setVerModal] = useState(false);
  // stores chat messages
  const [mensagens, setMensagens] = useState([
    { texto: "Olá! Como posso te ajudar?", tipo: "recebida" },
  ]);

  // user message input
  const [novaMensagem, setNovaMensagem] = useState("");

  // toggle the state of the modal
  const alterarModal = () => setVerModal(!mostrarModal);

  // send the message
  const enviarMensagem = async () => {
    if (novaMensagem.trim() === "") return; // Avoid sending empty messages

    // adds the user's message to the state
    setMensagens([...mensagens, { texto: novaMensagem, tipo: "enviada" }]);

    // clear the input field
    setNovaMensagem("");

    // function to get the response from the AI
    const respostaDaIA = await ChatService(novaMensagem);

    // add the AI ​​response to the state
    setMensagens((prevMensagens) => [
      ...prevMensagens,
      { texto: respostaDaIA, tipo: "recebida" },
    ]);
  };

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enviarMensagem();
    }
  };

  // copy the text to the clipboard
  const copiarMensagem = (mensagemTexto) =>
    navigator.clipboard.writeText(mensagemTexto);

  return (
    <>
      <button className="btn btn-primary botao-do-chat" onClick={alterarModal}>
        <i class="bi bi-chat-right-text"></i>
      </button>
      {mostrarModal && (
        <div className="sombra-da-pagina" onClick={alterarModal}></div>
      )}
      {mostrarModal && (
        <div className="modal-do-chat">
          <div className="titulo-do-modal">
            <h5>Chat Orion</h5>
            <button className="btn-close" onClick={alterarModal}></button>
          </div>
          <div className="corpo-do-chat">
            {/* Mapping messages and displaying them in chat */}
            {mensagens.map((mensagem, index) => (
              <div key={index} className={`menssagem ${mensagem.tipo}`}>
                <div className="nome-no-chat">
                  <strong>{mensagem.tipo === "enviada" ? "User" : "IA"}</strong>
                  {mensagem.tipo === "recebida" && (
                    <button
                      className="copy-icon"
                      title="Copiar mensagem"
                      onClick={() => copiarMensagem(mensagem.texto)}
                    >
                      <i className="bi bi-copy"></i>
                    </button>
                  )}
                </div>
                <p>{mensagem.texto}</p>
              </div>
            ))}
          </div>
          <div className="rodape-do-chat">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua mensagem..."
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              onKeyDown={KeyDown}
            />
            <button className="btn btn-primary" onClick={enviarMensagem}>
              <i class="bi bi-send"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
