import { Outlet } from "react-router";
import icon from "../assets/account_circle.svg";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <main className="flex-1">
        <header className="flex justify-between md:justify-end m-8">
          <h1 className="text-3xl font-bold md:hidden">Help Channel</h1>
          <img src={icon} alt="icone da conta" />
        </header>
        <Outlet />
        <BottomNav />
      </main>
    </>
  );
}
