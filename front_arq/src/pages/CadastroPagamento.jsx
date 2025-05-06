import { useState } from "react";
import axios from "axios";

export default function CadastroPagamento() {
  const [corridaId, setCorridaId] = useState("");
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");

  const cadastrar = () => {
    axios.post("http://localhost:8080/pagamentos", {
      corridaId,
      valor,
      formaPagamento,
    })
      .then(() => {
        alert("Pagamento cadastrado com sucesso!");
        setCorridaId("");
        setValor("");
        setFormaPagamento("");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar pagamento.");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Pagamento</h2>

        <label style={styles.label}>ID da Corrida</label>
        <input
          type="text"
          value={corridaId}
          onChange={(e) => setCorridaId(e.target.value)}
          placeholder="Digite o ID da corrida"
          style={styles.input}
        />

        <label style={styles.label}>Valor</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor"
          style={styles.input}
        />

        <label style={styles.label}>Forma de Pagamento</label>
        <input
          type="text"
          value={formaPagamento}
          onChange={(e) => setFormaPagamento(e.target.value)}
          placeholder="Digite a forma de pagamento"
          style={styles.input}
        />

        <button onClick={cadastrar} style={styles.button}>
          Cadastrar Pagamento
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
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
