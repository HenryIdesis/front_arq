import { useState } from "react";
import axios from "axios";

export default function CadastroMotorista() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nota, setNota] = useState("");

  const cadastrar = () => {
    axios.post("http://localhost:8080/motoristas", {
      nome,
      cpf,
      nota,
    }).then(() => {
      alert("Motorista cadastrado com sucesso!");
      setNome("");
      setCpf("");
      setNota("");
    }).catch((err) => {
      console.error(err);
      alert("Erro ao cadastrar motorista.");
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Motorista</h2>

        <label style={styles.label}>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
          style={styles.input}
        />

        <label style={styles.label}>CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF"
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

        <button onClick={cadastrar} style={styles.button}>
          Cadastrar Motorista
        </button>
      </div>
    </div>
  );
}

const styles = {
    container: {
      minHeight: "100vh",
      width: "100%", // força ocupar a tela toda
      display: "flex",
      justifyContent: "center", // centraliza horizontalmente
      alignItems: "center", // centraliza verticalmente
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
      maxWidth: "400px", // limita a largura centralizada
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
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };
  