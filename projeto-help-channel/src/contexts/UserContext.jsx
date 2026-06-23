import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { buscarUsuario } from "../services/usuarioService";

const UserContext = createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const entrar = async (userRole) => {
    // const contextualizarUsuario = async () => {
    // }
    const res = await buscarUsuario(userRole);
    setUsuario(res[0]);
    // contextualizarUsuario();
  };

  const sair = () => {
    setUsuario({});
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
