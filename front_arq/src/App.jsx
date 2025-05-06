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
      <div style={styles.appContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}>Sistema de Transporte</h1>
          <nav style={styles.nav}>
            <Link to="/motoristas/cadastrar" style={styles.link}>Cadastrar Motorista</Link>
            <Link to="/passageiros/cadastrar" style={styles.link}>Cadastrar Passageiro</Link>
            <Link to="/corridas/cadastrar" style={styles.link}>Cadastrar Corrida</Link>
            <Link to="/avaliacoes/cadastrar" style={styles.link}>Cadastrar Avaliação</Link>
            <Link to="/pagamentos/cadastrar" style={styles.link}>Cadastrar Pagamento</Link>
            <Link to="/historicos/cadastrar" style={styles.link}>Cadastrar Histórico</Link>
            <Link to="/splits/cadastrar" style={styles.link}>Cadastrar Split</Link>
          </nav>
        </header>

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
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    marginBottom: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1e40af",
  },
  nav: {
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    backgroundColor: "#e0e7ff",
    borderRadius: "6px",
    transition: "background-color 0.2s",
  },
};

export default App;
