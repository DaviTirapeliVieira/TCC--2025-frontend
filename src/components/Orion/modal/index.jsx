import React, { useState } from "react";
import { ChatService } from "../../../connection/OrionService";
import "./style.css";

export function Orion() {
  const [mostrarModal, setVerModal] = useState(false);
  // armazena as mensagens do chat
  const [mensagens, setMensagens] = useState([
    { texto: "Olá! Como posso te ajudar?", tipo: "recebida" },
  ]);

  // entrada de mensagem do usuário
  const [novaMensagem, setNovaMensagem] = useState("");

  // alternar o estado do modal
  const alterarModal = () => setVerModal(!mostrarModal);

  // enviar a mensagem
  const enviarMensagem = async () => {
    if (novaMensagem.trim() === "") return; // Evitar enviar mensagem vazia

    // adiciona a mensagem do usuário ao estado
    setMensagens([...mensagens, { texto: novaMensagem, tipo: "enviada" }]);

    // limpa o campo de entrada
    setNovaMensagem("");

    // chama a funcao do serviço para obter a resposta da IA
    const respostaDaIA = await ChatService(novaMensagem);

    // adiciona a resposta da IA ao estado
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

  // copiar o texto para a área de transferência
  const copiarMensagem = (mensagemTexto) => navigator.clipboard.writeText(mensagemTexto);

  return (
    <>
      <button className="btn btn-primary botao-do-chat" onClick={alterarModal}>
        O
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
            {/* Mapeando as mensagens e exibindo no chat */}
            {mensagens.map((mensagem, index) => (
              <div key={index} className={`menssagem ${mensagem.tipo}`}>
                <div className="nome-no-chat">
                  <strong>{mensagem.tipo === "enviada" ? "User" : "IA"}</strong>
                  {mensagem.tipo === "recebida" && (
                    <button className="copy-icon" title="Copiar mensagem" onClick={() => copiarMensagem(mensagem.texto)}>
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
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
