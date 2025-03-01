export default function TodoList() {
  return (
    <ul className="list-none">
      <li className="bg-white p-2 flex border-t border-t-gray-300 border-r border-r-gray-300 border-b border-b-gray-300 border-l-4 border-l-blue-500 rounded justify-between my-1">
        <span>タスク1</span>
        <div className="w-36 flex justify-around items-center">
          <a
            href="#"
            className="text-sm text-blue-800 no-underline cursor-pointer"
          >
            check
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-sm text-blue-800 no-underline cursor-pointer"
          >
            edit
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-sm text-blue-800 no-underline cursor-pointer"
          >
            delete
          </a>
        </div>
      </li>
      <li className="bg-white p-2 flex border-t border-t-gray-300 border-r border-r-gray-300 border-b border-b-gray-300 border-l-4 border-l-blue-500 rounded justify-between my-1">
        <span>タスク2</span>
        <div className="w-36 flex justify-around items-center">
          <a
            href="#"
            className="text-sm text-blue-700 no-underline cursor-pointer"
          >
            check
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-sm text-blue-700 no-underline cursor-pointer"
          >
            edit
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-sm text-blue-700 no-underline cursor-pointer"
          >
            delete
          </a>
        </div>
      </li>
    </ul>
  );
}
