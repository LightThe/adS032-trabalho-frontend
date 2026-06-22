async function listar() {
    // FIXME: placeholder
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
        {
          titulo: "Problema de rede",
          status: "cancelado",
          data: "25/10/1913",
          descricao:
            "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          titulo: "Não consigo acessar",
          status: "concluido",
          data: "25/10/1913",
          descricao:
            "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          titulo: "Instalação de software",
          status: "aberto",
          data: "25/10/1913",
          descricao:
            "Início do Texto Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
      ];
}

export {listar}