import AppLayout from "./components/AppLayout";
import ListagemTickets from "./pages/ListagemTickets";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ListagemTickets />} />
      </Route>
    </Routes>
  );
}

export default App;
