const url = "http://localhost:3000/administracao";

//POST http://localhost:3000/administracao/:id: Entra no sistema e lista todos os tickets que um usuário de suporte está relacionado.
async function entrar(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao entrar no sistema. ${error.code}-${error.message}`,
    };
  }
}

//GET http://localhost:3000/administracao/tickets: Lista todos os tickets disponíveis para atendimento.
async function listarTickets() {
  try {
    const response = await fetch(`${url}/tickets`);
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao listar tickets. ${error.code}-${error.message}`,
    };
  }
}

//GET http://localhost:3000/administracao/tickets/:ticketId: Abre um ticket específico.
async function abrirTicket(ticketId) {
  try {
    const response = await fetch(`${url}/tickets/${ticketId}`);
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao abrir ticket. ${error.code}-${error.message}`,
    };
  }
}

//PUT http://localhost:3000/administracao/tickets/:ticketId: Modifica um ticket específico (atribuindo um funcionário ao ticket).
async function modificarTicket(ticketId, modificacao) {
  try {
    const response = await fetch(`${url}/tickets/${ticketId}`, {
      method: "PATCH", //mesma coisa do clienteService.js, talvez seja melhor usar PATCH, mas não sei se o backend aceita
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ modificacao }),
    });
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao modificar ticket. ${error.code}-${error.message}`,
    };
  }
}

//POST http://localhost:3000/administracao/novo-usuario: Cria um novo perfil de funcionário.
async function criarUsuario(nome, email, senha) {
  try {
    const response = await fetch(`${url}/novo-usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });
    return await response.json();
  } catch (error) {
    return {
      message: `Erro ao criar usuário. ${error.code}-${error.message}`,
    };
  }
}

export { entrar, listarTickets, abrirTicket, modificarTicket, criarUsuario };
