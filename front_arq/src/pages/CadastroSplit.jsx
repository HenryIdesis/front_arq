import { useState } from "react";
import axios from "axios";

export default function CadastroSplit() {
  const [valor, setValor] = useState("");
  const [motorista, setMotorista] = useState("");

  const cadastrar = () => {
    axios.post("http://localhost:8080/splits", {
      valor,
      motorista,
    })
      .then(() => {
        alert("Split cadastrado com sucesso!");
        setValor("");
        setMotorista("");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar split.");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Split</h2>

        <label style={styles.label}>Valor</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor"
          style={styles.input}
        />

        <label style={styles.label}>Motorista (CPF ou ID)</label>
        <input
          type="text"
          value={motorista}
          onChange={(e) => setMotorista(e.target.value)}
          placeholder="Digite o identificador do motorista"
          style={styles.input}
        />

        <button onClick={cadastrar} style={styles.button}>
          Cadastrar Split
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
    backgroundColor: "#c026d3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
