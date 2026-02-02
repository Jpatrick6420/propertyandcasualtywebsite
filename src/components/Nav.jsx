function Nav({ handler }) {
  return (
    <nav>
      <ul className="flex gap-4 px-2 bg-black xl:justify-center">
        <li
          onClick={() => handler("callscript")}
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300"
        >
          Script
        </li>
        <li
          onClick={() => handler("hooks")}
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300"
        >
          Hooks
        </li>
        <li
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300"
          onClick={() => handler("assessor")}
        >
          Assessor Data
        </li>
        <li className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300">
          Products
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
