import { useEffect, useState } from "react";
import { listar } from "../services/ticketService";

export default function ListagemTickets() {
  const [tickets, setTickets] = useState([]);
  const statusIcons = {
    aberto: "flag_circle",
    concluido: "check_circle",
    cancelado: "cancel",
  };
  const statusColor = {
    aberto: "text-blue-700",
    concluido: "text-green-700",
    cancelado: "text-red-700",
  };

  // TODO: Buscar tipo de usuário logado e modificar o tipo de listagem
  useEffect(() => {
    const obterTickets = async () => {
      const res = await listar();
      setTickets(res);
    };
    obterTickets();
  }, []);

  return (
    <section className="bg-gray-200 p-4 m-4 rounded-lg">
      {/* TODO: definir título para usuário (meus) e administrador (ultimos) */}
      <h3 className="text-xl font-bold">Meus Tickets / Ultimos Tickets</h3>
      {tickets.map((item, key) => (
        <article key={key} className="bg-gray-300 p-2 my-2 rounded-lg">
          <header className="flex justify-between">
            <h4 className="font-bold">{item.titulo}</h4>
            <span
              className={`material-symbols-rounded ${statusColor[item.status]}`}
            >
              {statusIcons[item.status]}
            </span>
          </header>
          <h5 className="text-sm">{item.data}</h5>
          <p>{item.descricao}</p>
          <button className="bg-gray-200 py-1 px-2 rounded">Acessar</button>
        </article>
      ))}
    </section>
  );
}
