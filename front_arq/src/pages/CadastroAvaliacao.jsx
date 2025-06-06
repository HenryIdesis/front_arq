import { useState } from "react";
import axios from "axios";

export default function CadastroAvaliacao() {
  const [passageiro, setPassageiro] = useState("");
  const [nota, setNota] = useState("");
  const [comentario, setComentario] = useState("");

  const cadastrar = () => {
    axios.post("http://localhost:8080/avaliacoes", {
      passageiro,
      nota,
      comentario,
    })
      .then(() => {
        alert("Avaliação cadastrada com sucesso!");
        setPassageiro("");
        setNota("");
        setComentario("");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar avaliação.");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Avaliação</h2>

        <label style={styles.label}>Email do Passageiro</label>
        <input
          type="text"
          value={passageiro}
          onChange={(e) => setPassageiro(e.target.value)}
          placeholder="Digite o email"
          style={styles.input}
        />

        <label style={styles.label}>Nota</label>
        <input
          type="number"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Digite a nota"
          style={styles.input}
        />

        <label style={styles.label}>Comentário</label>
        <input
          type="text"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Digite o comentário"
          style={styles.input}
        />

        <button onClick={cadastrar} style={styles.button}>
          Cadastrar Avaliação
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
    backgroundColor: "#9333ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
