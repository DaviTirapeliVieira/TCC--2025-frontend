import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Chamada from "./pages/Chamada";
import Nota from "./pages/Nota";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroClasse from "./pages/CadastroClasse";
import Calendario from "./pages/Calendario";
import PTDForm from "./pages/PTD";
import GraficoPresenca from "./pages/GraficoPresenca";
import Elo from "./pages/Elo";
import NotFound from "./not-found";
import "./App.css";
import "./styles/background.css";

export default function App() {
  return (
      <Router>
        <div className="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/chamada" element={<Chamada />} />
            <Route path="/nota" element={<Nota />} />
            <Route path="/cadastro-aluno" element={<CadastroAluno />} />
            <Route path="/cadastro-classe" element={<CadastroClasse />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/ptd-form" element={<PTDForm />} />
            <Route path="/grafico-presenca" element={<GraficoPresenca />} />
            <Route path="/elo" element={<Elo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
}
