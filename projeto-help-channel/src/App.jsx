import AppLayout from "./components/AppLayout";
import CadastrarTicket from "./pages/CadastrarTicket";
import Home from "./pages/Home";
import ListagemTickets from "./pages/ListagemTickets";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tickets" element={<AppLayout />}>
        <Route index element={<ListagemTickets />} />
        <Route path="novo" element={<CadastrarTicket />} />
      </Route>
    </Routes>
  );
}

export default App;
