// FIXME: placeholder, precisa desenvolver toda essa conexão

async function listar() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      titulo: "Problema de rede",
      status: "cancelado",
      data: "25/10/1913",
      descricao:
        "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      usuario: "vhj8rfe9wq0",
    },
    {
      titulo: "Não consigo acessar",
      status: "concluido",
      data: "25/10/1913",
      descricao:
        "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      usuario: "vhj8rfe9wq0",
    },
    {
      titulo: "Instalação de software",
      status: "aberto",
      data: "25/10/1913",
      descricao:
        "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      usuario: "vhj8rfe9wq0",
    },
  ];
}
async function listarPorUsuario(idUsuario) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [{
      titulo: "Instalação de software",
      status: "aberto",
      data: "25/10/1913",
      descricao:
        "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      usuario: idUsuario,
    },
  ]
}

export { listar, listarPorUsuario };
