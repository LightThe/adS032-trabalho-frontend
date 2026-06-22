export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full py-2 px-8 bg-gray-300 ">
      <ul className="flex justify-between">
        <li>
          <span className="material-symbols-rounded">
            <span className="text-4xl">flag</span>
          </span>
        </li>
        <li>
          <span className="material-symbols-rounded">
            <span className="text-4xl">add</span>
          </span>
        </li>
        <li>
          <span className="material-symbols-rounded">
            <span className="text-4xl">logout</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
