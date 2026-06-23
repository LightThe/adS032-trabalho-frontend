import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const { entrar } = useContext(UserContext);
  const handleEntrar = (userRole) =>{
    entrar(userRole);
    navigate('/tickets');
  }
  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-5xl text-center font-light mb-40">Help Channel</h1>
      <nav className="flex flex-col md:flex-row">
        <section className="rounded-xl bg-taupe-300 p-6 m-1 flex flex-col items-center">
          <h3 className="text-xl">Sou um usuário</h3>
          <button
            className="bg-blue-900 text-white py-2 px-8 rounded-2xl"
            onClick={()=>{handleEntrar("user")}}
          >
            Meus Tickets
          </button>
        </section>
        <section className="rounded-xl bg-taupe-300 p-6 m-1 flex flex-col items-center">
          <h3 className="text-xl">Sou um administrador</h3>
          <button
            className="bg-blue-900 text-white py-2 px-8 rounded-2xl"
            onClick={()=>{handleEntrar("admin")}}
          >
            Solucionar Tickets
          </button>
        </section>
      </nav>
    </main>
  );
}
