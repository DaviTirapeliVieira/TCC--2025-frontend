import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AutenticadoInfo } from "./api/Autenticador";
import { PrivateRoute } from "./api/RotaProtegida";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Chamada from "./pages/Chamada";
import Nota from "./pages/Nota";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroClasse from "./pages/CadastroClasse";
import Elo from "./pages/Elo";
import NotFound from "./not-found";
import "./App.css";
import "./styles/background.css";

export default function App() {
  return (
    <AutenticadoInfo>
      <Router>
        <div className="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
            <Route path="/chamada" element={<PrivateRoute><Chamada /></PrivateRoute>} />
            <Route path="/nota" element={<PrivateRoute><Nota /></PrivateRoute>} />
            <Route path="/cadastro-aluno" element={<PrivateRoute><CadastroAluno /></PrivateRoute>} />
            <Route path="/cadastro-classe" element={<PrivateRoute><CadastroClasse /></PrivateRoute>} />
            <Route path="/elo" element={<PrivateRoute><Elo /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AutenticadoInfo>
  );
}
