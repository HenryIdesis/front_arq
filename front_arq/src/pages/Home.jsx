import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo ao Sistema de Transporte</h1>
        <p>Gerencie suas corridas, motoristas e passageiros de forma eficiente</p>
      </div>

      <div className="features-grid">
        <div className="card">
          <h2>Motoristas</h2>
          <p>Cadastre e gerencie seus motoristas</p>
          <Link to="/motoristas/cadastrar" className="btn">Gerenciar Motoristas</Link>
        </div>

        <div className="card">
          <h2>Passageiros</h2>
          <p>Cadastre e gerencie seus passageiros</p>
          <Link to="/passageiros/cadastrar" className="btn">Gerenciar Passageiros</Link>
        </div>

        <div className="card">
          <h2>Corridas</h2>
          <p>Registre e acompanhe suas corridas</p>
          <Link to="/corridas/cadastrar" className="btn">Gerenciar Corridas</Link>
        </div>

        <div className="card">
          <h2>Avaliações</h2>
          <p>Gerencie as avaliações do serviço</p>
          <Link to="/avaliacoes/cadastrar" className="btn">Gerenciar Avaliações</Link>
        </div>

        <div className="card">
          <h2>Pagamentos</h2>
          <p>Controle os pagamentos e recebimentos</p>
          <Link to="/pagamentos/cadastrar" className="btn">Gerenciar Pagamentos</Link>
        </div>

        <div className="card">
          <h2>Histórico</h2>
          <p>Acesse o histórico completo</p>
          <Link to="/historicos/cadastrar" className="btn">Ver Histórico</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
