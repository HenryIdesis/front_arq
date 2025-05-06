import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sistema de Transporte Inteligente</h1>
      <div style={styles.grid}>
        <button onClick={() => navigate("/passageiros/cadastrar")} style={styles.card}>
          Sou Passageiro
        </button>
        <button onClick={() => navigate("/motoristas/cadastrar")} style={styles.card}>
          Sou Motorista
        </button>
        <button onClick={() => navigate("/corridas/cadastrar")} style={styles.card}>
          Chamar Corrida
        </button>
        <button onClick={() => navigate("/pagamentos/cadastrar")} style={styles.card}>
          Fazer Pagamento
        </button>
        <button onClick={() => navigate("/avaliacoes/cadastrar")} style={styles.card}>
          Avaliar Corrida
        </button>
        <button onClick={() => navigate("/historicos/cadastrar")} style={styles.card}>
          Visualizar Histórico
        </button>
        <button onClick={() => navigate("/splits/cadastrar")} style={styles.card}>
          Gerar Split
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "1.2rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
};
