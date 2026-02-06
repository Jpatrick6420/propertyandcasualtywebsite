function Nav({ handler }) {
  return (
    <nav>
      <ul className="flex gap-4 px-2 py-1 bg-black xl:justify-center mb-2">
        <li
          onClick={() => handler("callscript")}
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:underline"
        >
          Script
        </li>
        <li
          onClick={() => handler("hooks")}
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:underline"
        >
          Hooks
        </li>
        <li
          className="text-stone-200 hover:text-green-300 cursor-pointer hover:underline"
          onClick={() => handler("assessor")}
        >
          Assessor Data
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
