function Nav({ handler }) {
  return (
    <nav>
      <ul className="flex gap-4 px-2 py-1 bg-black xl:justify-end mb-2">
        <li
          className="text-purple-300 hover:text-orange-400 cursor-pointer hover:underline transition-all duration-250 ease-in"
          onClick={() => handler("intake_form")}
        >
          Call Form
        </li>
        <li
          onClick={() => handler("hooks")}
          className="text-purple-300 hover:text-orange-400 cursor-pointer hover:underline transition-all duration-250 ease-in"
        >
          Hooks
        </li>
        <li
          className="text-purple-300 hover:text-orange-400 cursor-pointer hover:underline  transition-all duration-250 ease-in"
          onClick={() => handler("assessor")}
        >
          Assessor
        </li>

        <li
          className="text-purple-300 hover:text-orange-400 cursor-pointer hover:underline  transition-all duration-250 ease-in"
          onClick={() => handler("comparison_tool")}
        >
          Comparison Tool
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
