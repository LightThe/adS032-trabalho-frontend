import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  // TODO: buscar, de fato, um usuário com role "user" ou "admin" de acordo com a userRole recebida
  const entrar = (userRole) => {
    const user = {id: "1234asdf",
    nome: "Fulano de Tal",
    role: userRole,}
    setUsuario(user);
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
