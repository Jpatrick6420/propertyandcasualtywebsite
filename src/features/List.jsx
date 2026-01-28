function List({ items }) {
  return (
    <li className="py-2 px-4 my-2 space-y-2 border-2 border-gray-700 hover:translate-x-2 hover:bg-blue-200">
      <h2 className="sm:text-sm lg:text-lg font-bold">Text Day: {items.day}</h2>
      <p className="xs:text-sm lg:text-md">{items.message}</p>
    </li>
  );
}

export default List;
