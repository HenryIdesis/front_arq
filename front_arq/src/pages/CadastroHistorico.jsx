import { useState } from "react";
import axios from "axios";

export default function CadastroHistorico() {
  const [corridaId, setCorridaId] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");

  const cadastrar = () => {
    axios.post("http://localhost:8080/historicos", {
      corridaId,
      status,
      data,
    })
      .then(() => {
        alert("Histórico cadastrado com sucesso!");
        setCorridaId("");
        setStatus("");
        setData("");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar histórico.");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Histórico</h2>

        <label style={styles.label}>ID da Corrida</label>
        <input
          type="text"
          value={corridaId}
          onChange={(e) => setCorridaId(e.target.value)}
          placeholder="Digite o ID da corrida"
          style={styles.input}
        />

        <label style={styles.label}>Status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Digite o status"
          style={styles.input}
        />

        <label style={styles.label}>Data</label>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Digite a data (ex: 2025-05-06)"
          style={styles.input}
        />

        <button onClick={cadastrar} style={styles.button}>
          Cadastrar Histórico
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#1f2937",
  },
  label: {
    marginBottom: "0.3rem",
    fontWeight: "bold",
    display: "block",
    color: "#111827",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#0f766e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
