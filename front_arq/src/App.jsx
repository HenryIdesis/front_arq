import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastroMotorista from "./pages/CadastroMotorista";
import CadastroPassageiro from "./pages/CadastroPassageiro";
import CadastroCorrida from "./pages/CadastroCorrida";
import CadastroAvaliacao from "./pages/CadastroAvaliacao";
import CadastroPagamento from "./pages/CadastroPagamento";
import CadastroHistorico from "./pages/CadastroHistorico";
import CadastroSplit from "./pages/CadastroSplit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="header-content">
            <h1 className="title">Sistema de Transporte</h1>
            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/motoristas/cadastrar" className="nav-link">Motoristas</Link>
              <Link to="/passageiros/cadastrar" className="nav-link">Passageiros</Link>
              <Link to="/corridas/cadastrar" className="nav-link">Corridas</Link>
              <Link to="/avaliacoes/cadastrar" className="nav-link">Avaliações</Link>
              <Link to="/pagamentos/cadastrar" className="nav-link">Pagamentos</Link>
              <Link to="/historicos/cadastrar" className="nav-link">Histórico</Link>
              <Link to="/splits/cadastrar" className="nav-link">Splits</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/motoristas/cadastrar" element={<CadastroMotorista />} />
            <Route path="/passageiros/cadastrar" element={<CadastroPassageiro />} />
            <Route path="/corridas/cadastrar" element={<CadastroCorrida />} />
            <Route path="/avaliacoes/cadastrar" element={<CadastroAvaliacao />} />
            <Route path="/pagamentos/cadastrar" element={<CadastroPagamento />} />
            <Route path="/historicos/cadastrar" element={<CadastroHistorico />} />
            <Route path="/splits/cadastrar" element={<CadastroSplit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
