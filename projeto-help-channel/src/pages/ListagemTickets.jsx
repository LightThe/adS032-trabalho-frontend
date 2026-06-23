import { useContext, useEffect, useState } from "react";
import { listar, listarPorUsuario } from "../services/ticketService";
import { UserContext } from "../contexts/UserContext";

export default function ListagemTickets() {
  const { usuario } = useContext(UserContext);
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

  useEffect(() => {
    const obterTickets = async () => {
      if (usuario.role === "admin") {
        const res = await listar();
        setTickets(res);
      } else {
        const res = await listarPorUsuario(usuario.id);
        setTickets(res);
      }
    };
    obterTickets();
  }, [usuario]);

  return (
    <section className="bg-taupe-200 p-4 m-4 rounded-lg">
      <h3 className="text-xl font-bold">
        {usuario.role == "admin" ? "Últimos" : "Meus"} Tickets
      </h3>
      {tickets.map((item, key) => (
        <article key={key} className="bg-taupe-300 p-2 my-2 rounded-lg">
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
          <button className="bg-blue-900 text-white py-1 px-2 rounded">
            Acessar
          </button>
        </article>
      ))}
    </section>
  );
}
