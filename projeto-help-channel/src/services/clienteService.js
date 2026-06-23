const url = "http://localhost:3000/clientes";

//POST http://localhost:3000/clientes/novo-cliente: Cria um novo perfil de cliente.
async function criarCliente(nome, email, senha) {
  try {
    const response = await fetch(`${url}/novo-cliente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });
    return await response.json();
  } catch (error) {
    return { message: `Erro ao criar cliente. ${error.code}-${error.message}` };
  }
}

//GET http://localhost:3000/clientes/:id/tickets: Lista todos os tickets criados por um usuário cliente.
async function listarTickets(id) {
  try {
    const response = await fetch(`${url}/${id}/tickets`);
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao listar tickets. ${error.code}-${error.message}`,
    };
  }
}

//POST http://localhost:3000/clientes/:id/novo-ticket: Cria um ticket de usuário cliente.
async function criarTicket(id, titulo, descricao) {
  try {
    const response = await fetch(`${url}/${id}/novo-ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descricao }),
    });
    return await response.json();
  } catch (error) {
    return { message: `Erro ao criar ticket. ${error.code}-${error.message}` };
  }
}

//GET http://localhost:3000/clientes/:id/tickets/:ticketId: Retorna um ticket específico do usuário cliente.
async function obterTicket(id, ticketId) {
  try {
    const response = await fetch(`${url}/${id}/tickets/${ticketId}`);
    return await response.json();
  } catch (error) {
    return { message: `Erro ao obter ticket. ${error.code}-${error.message}` };
  }
}

//PUT http://localhost:3000/clientes/:id/tickets/:ticketId: Envia um novo bloco de texto (mensagem) junto ao ticket original.
async function atualizarTicket(id, ticketId, mensagem) {
  try {
    const response = await fetch(`${url}/${id}/tickets/${ticketId}`, {
      method: "PATCH", // Acho que PATCH é mais apropriado para atualizar parte do recurso, mas se o servidor espera PUT, pode ser necessário usar PUT.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensagem }),
    });
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao atualizar ticket. ${error.code}-${error.message}`,
    };
  }
}

export {
  criarCliente,
  listarTickets,
  criarTicket,
  obterTicket,
  atualizarTicket,
};
