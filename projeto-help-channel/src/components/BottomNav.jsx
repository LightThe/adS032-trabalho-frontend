import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router";

export default function BottomNav() {
  const { sair, usuario } = useContext(UserContext);
  const activeStyles = ({ isActive }) =>
    isActive ? "text-blue-800 text-lg" : undefined;
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full py-2 px-8 bg-taupe-300 ">
      <ul className="flex justify-between">
        <li>
          <NavLink className={activeStyles} to="/tickets">
            <span className="material-symbols-rounded">
              <span className="text-4xl">flag</span>
            </span>
          </NavLink>
        </li>
        {usuario.role !== "admin" && (
          <li>
            <NavLink className={activeStyles} to="/tickets/novo">
              <span className="material-symbols-rounded">
                <span className="text-4xl">add</span>
              </span>
            </NavLink>
          </li>
        )}
        <li onClick={sair}>
          <span className="material-symbols-rounded">
            <span className="text-4xl">logout</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
