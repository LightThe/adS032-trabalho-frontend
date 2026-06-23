import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router";

export default function Sidebar() {
  const { sair, usuario } = useContext(UserContext);
  const activeStyles = ({ isActive }) =>
    isActive ? "text-blue-800 text-lg flex items-center" : "flex items-center";
  return (
    <aside className="hidden md:block bg-taupe-300 w-64 p-4 h-full">
      <h1 className="text-3xl font-bold">Help Channel</h1>
      <nav>
        <ul className="my-8 text-xl">
          <li>
            <NavLink className={activeStyles} to="/tickets">
              <span className="material-symbols-rounded">
                <span className="text-4xl">flag</span>
              </span>
              Meus Tickets
            </NavLink>
          </li>
          {usuario.role !== "admin" && (
            <li>
              <NavLink className={activeStyles}  to="/tickets/novo">
                <span className="material-symbols-rounded">
                  <span className="text-4xl">add</span>
                </span>
                Novo ticket
              </NavLink>
            </li>
          )}
          <li className="flex items-center" onClick={sair}>
            <span className="material-symbols-rounded">
              <span className="text-4xl">logout</span>
            </span>
            Sair
          </li>
        </ul>
      </nav>
    </aside>
  );
}
