import { useState, useContext } from "react";
import { useNavigate } from "react-router";
// Ajuste os caminhos de importação conforme a estrutura do seu projeto
import { UserContext } from "../contexts/UserContext";
import { criar } from "../services/ticketService";
import InputCard from "./InputCard";

export default function CadastrarTicket() {
  // 1. Estados controlados do formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erros, setErros] = useState({}); // Objeto para guardar os erros de validação

  // 2. Hooks de contexto e navegação
  const { usuario } = useContext(UserContext);
  const navigate = useNavigate();

  // 3. Regras de validação do frontend
  const validarFormulario = () => {
    const novosErros = {};

    if (!titulo.trim()) {
      novosErros.titulo = "O título é obrigatório.";
    }

    if (descricao.trim().length <= 5) {
      novosErros.descricao = "A descrição deve ter mais de 5 caracteres.";
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
      status: "aberto",
      data: new Date().toISOString(), // Pega a data/hora atual no formato ISO
    };

    try {
      // Chama a camada de serviço
      await criar(payload);

      // Redireciona imediatamente em caso de sucesso
      navigate("/tickets");
    } catch (error) {
      // Requisito: logar erro no console, sem exibir na interface
      console.error("Erro ao criar ticket na API:", error);
    }
  };

  return (
    <section className="container-ticket-novo m-6 bg-mist-200 rounded-xl relative pb-16">
      <h1 className="text-2xl font-bold m-4 pt-2">Novo Ticket</h1>

      <form onSubmit={handleSubmit} noValidate>
        <InputCard
          label="Título"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          error={erros.titulo}
        />

        <InputCard
          label="Descrição"
          type="textarea"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          error={erros.descricao}
          rows={5}
        />

        {/* Botões posicionados dentro do card (canto inferior direito) */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <button
            type="button"
            onClick={() => navigate("/tickets")}
            className="text-black hover:text-gray-700 font-bold py-2 px-4 rounded border-2 border-black"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Criar ticket
          </button>
        </div>
      </form>
    </section>
  );
}
