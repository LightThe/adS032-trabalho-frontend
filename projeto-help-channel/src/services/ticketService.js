const url = "http://localhost:3000/tickets";
async function listar() {
  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("erro ao buscar tickets " + error.message);
  }
}

async function listarPorUsuario(idUsuario) {
  try {
    const response = await fetch(`${url}?usuario=${idUsuario}`);
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("erro ao buscar tickets do usuario " + error.message);
  }
}

async function criar(ticket) {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await res.json();
    return dados;
  } catch (error) {
    console.error("Erro ao criar ticket: ", error.message);
  }
}

async function atualizar(ticket){
  try {
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(ticket),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await res.json();
    return dados;
  } catch (error) {
    console.error("Erro ao atualizar dados do ticket: ", error.message);
  }
}

export { listar, listarPorUsuario, criar, atualizar };
