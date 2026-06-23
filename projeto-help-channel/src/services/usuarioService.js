const url = "http://localhost:3000/usuarios";

async function buscarUsuario(role) {
  try {
    const response = await fetch(`${url}?role=${role}`);
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("erro ao buscar usuario " + error.message);
  }
}

export { buscarUsuario };
