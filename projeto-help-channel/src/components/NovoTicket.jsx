import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
// Ajuste os caminhos de importação conforme a estrutura do seu projeto
import { UserContext } from '../contexts/UserContext'; 
import { criarTicket } from '../services/ticketService';

export default function CadastrarTicket() {
  // 1. Estados controlados do formulário
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erros, setErros] = useState({}); // Objeto para guardar os erros de validação
  
  // 2. Hooks de contexto e navegação
  const { usuario } = useContext(UserContext);
  const navigate = useNavigate();

  // 3. Regras de validação do frontend
  const validarFormulario = () => {
    const novosErros = {};
    
    if (!titulo.trim()) {
      novosErros.titulo = 'O título é obrigatório.';
    }
    
    if (descricao.trim().length <= 10) {
      novosErros.descricao = 'A descrição deve ter mais de 10 caracteres.';
    }
    
    setErros(novosErros);
    
    // Retorna true se o objeto de erros estiver vazio (formulário válido)
    return Object.keys(novosErros).length === 0;
  };

  // 4. Manipulação do Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    if (!validarFormulario()) {
      return; // Interrompe a execução se houver erros
    }

    // Monta o objeto exatamente como a issue pede
    const payload = {
      titulo,
      descricao,
      usuario: usuario.id, // Assumindo que o contexto expõe um objeto com 'id'
      status: 'aberto',
      data: new Date().toISOString() // Pega a data/hora atual no formato ISO
    };

    try {
      // Chama a camada de serviço
      await criarTicket(payload);
      
      // Redireciona imediatamente em caso de sucesso
      navigate('/tickets');
    } catch (error) {
      // Requisito: logar erro no console, sem exibir na interface
      console.error('Erro ao criar ticket na API:', error);
    }
  };

  return (
    <section className="container-ticket-novo m-6 bg-mist-200 rounded-xl">
      <h1 className="text-2xl font-bold m-4 pt-2">Novo Ticket</h1>
      
      <form onSubmit={handleSubmit} noValidate>
        {/* Campo: Título */}
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {/* Renderização condicional da mensagem de erro */}
          {erros.titulo && <span className="erro" style={{ color: 'red', display: 'block' }}>{erros.titulo}</span>}
        </div>

        {/* Campo: Descrição */}
        <div style={{ marginTop: '1rem' }}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={5}
          />
          {erros.descricao && <span className="erro" style={{ color: 'red', display: 'block' }}>{erros.descricao}</span>}
        </div>

        {/* Botão de Submit */}
        <button type="submit" style={{ marginTop: '1rem' }}>
          Criar ticket
        </button>
      </form>
    </section>
  );
}

