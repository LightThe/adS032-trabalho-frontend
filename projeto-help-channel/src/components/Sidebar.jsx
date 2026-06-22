export default function Sidebar() {
  return (
    <aside className="hidden md:block bg-gray-300 w-64 p-4 h-full">
      <h1 className="text-3xl font-bold">Help Channel</h1>
      <nav>
        <ul className="my-8 text-xl">
          <li className="flex items-center">
            <span className="material-symbols-rounded">
              <span className="text-4xl">flag</span>
            </span>
            Início
          </li>
          <li className="flex items-center">
            <span className="material-symbols-rounded">
              <span className="text-4xl">add</span>
            </span>
            Novo ticket
          </li>
          <li className="flex items-center">
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
