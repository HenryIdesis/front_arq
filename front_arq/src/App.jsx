import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [carros, setCarros] = useState([]);
  const [motoristas, setMotoristas] = useState([]);
  const [passageiros, setPassageiros] = useState([]);
  const [corridas, setCorridas] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [pagamentos, setPagamentos] = useState([]);
  const [historicos, setHistoricos] = useState([]);
  const [splits, setSplits] = useState([]);

  // estados para cadastro de motorista
  const [nomeMotorista, setNomeMotorista] = useState("");
  const [cpfMotorista, setCpfMotorista] = useState("");
  const [notaMotorista, setNotaMotorista] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/carros").then(res => setCarros(res.data)).catch(console.error);
    axios.get("http://localhost:8080/motoristas").then(res => setMotoristas(res.data)).catch(console.error);
    axios.get("http://localhost:8080/passageiros").then(res => setPassageiros(res.data)).catch(console.error);
    axios.get("http://localhost:8080/corridas").then(res => setCorridas(res.data)).catch(console.error);
    axios.get("http://localhost:8080/avaliacoes").then(res => setAvaliacoes(res.data)).catch(console.error);
    axios.get("http://localhost:8080/pagamentos").then(res => setPagamentos(res.data)).catch(console.error);
    axios.get("http://localhost:8080/historicos").then(res => setHistoricos(res.data)).catch(console.error);
    axios.get("http://localhost:8080/splits").then(res => setSplits(res.data)).catch(console.error);
  }, []);

  const cadastrarMotorista = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/motoristas", {
        nome: nomeMotorista,
        cpf: cpfMotorista,
        nota: parseFloat(notaMotorista),
      });
      alert("Motorista cadastrado com sucesso!");
      const res = await axios.get("http://localhost:8080/motoristas");
      setMotoristas(res.data);
      setNomeMotorista("");
      setCpfMotorista("");
      setNotaMotorista("");
    } catch (error) {
      console.error("Erro ao cadastrar motorista:", error);
      alert("Erro ao cadastrar motorista.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Carros</h2>
      <ul>
        {carros.map((c, i) => (
          <li key={i}>
            <strong>{c.modelo}</strong> - {c.placa} - {c.cor} - {c.ano}
          </li>
        ))}
      </ul>

      <h2>Cadastrar Motorista</h2>
      <form onSubmit={cadastrarMotorista} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nome"
          value={nomeMotorista}
          onChange={(e) => setNomeMotorista(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpfMotorista}
          onChange={(e) => setCpfMotorista(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Nota"
          min="0"
          max="5"
          step="0.1"
          value={notaMotorista}
          onChange={(e) => setNotaMotorista(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Motoristas</h2>
      <ul>
        {motoristas.map((m, i) => (
          <li key={i}>
            <strong>{m.nome}</strong> - CPF: {m.cpf} - Nota: {m.nota}
          </li>
        ))}
      </ul>

      <h2>Passageiros</h2>
      <ul>
        {passageiros.map((p, i) => (
          <li key={i}>
            <strong>{p.nome}</strong> - Email: {p.email} - Telefone: {p.telefone}
          </li>
        ))}
      </ul>

      <h2>Corridas</h2>
      <ul>
        {corridas.map((c, i) => (
          <li key={i}>
            ID: {c.id} - Origem: {c.origem} - Destino: {c.destino} - Valor: R${c.valor}
          </li>
        ))}
      </ul>

      <h2>Avaliações</h2>
      <ul>
        {avaliacoes.map((a, i) => (
          <li key={i}>
            Passageiro: {JSON.stringify(a.passageiro)} - Nota: {a.nota} - Comentário: {a.comentario}
          </li>
        ))}
      </ul>

      <h2>Pagamentos</h2>
      <ul>
        {pagamentos.map((p, i) => (
          <li key={i}>
            Corrida: {p.corridaId} - Valor: R${p.valor} - Forma: {p.formaPagamento}
          </li>
        ))}
      </ul>

      <h2>Histórico</h2>
      <ul>
        {historicos.map((h, i) => (
          <li key={i}>
            Corrida: {h.corridaId} - Status: {h.status} - Data: {h.data}
          </li>
        ))}
      </ul>

      <h2>Split</h2>
      <ul>
        {splits.map((s, i) => (
          <li key={i}>
            Valor: R${s.valor} - Motorista: {JSON.stringify(s.motorista)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
