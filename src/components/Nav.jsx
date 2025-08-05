function Nav() {
  return (
    <ul className="flex gap-4 px-2 bg-black xl:justify-center">
      <li className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300">
        Quote
      </li>
      <li className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300">
        About
      </li>
      <li className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300">
        Contact
      </li>
      <li className="text-stone-200 hover:text-green-300 cursor-pointer hover:border-b border-b-green-300">
        Products
      </li>
    </ul>
  );
}

export default Nav;
