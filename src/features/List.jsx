function List({ items }) {
  return (
    <li>
      <h2>Day: {items.day}</h2>
      <p>{items.message}</p>
    </li>
  );
}

export default List;
