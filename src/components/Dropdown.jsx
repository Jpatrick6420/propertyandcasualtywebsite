function Dropdown({ label, options, handler, state }) {
  const newOptions = options.map((item) => {
    const split = item.split(" ");
    const newSplit = split.map((newItem) => {
      const firstLetter = newItem[0].toUpperCase();
      const restOfWord = newItem.slice(1);
      return `${firstLetter}${restOfWord}`;
    });
    return newSplit.join(" ");
  });
  return (
    <div>
      <label>{label}</label>
      <select
        name="call_type"
        id="call_type"
        value={state}
        onChange={(e) =>
          handler({ type: "SET_CALL_TYPE", payload: e.target.value })
        }
      >
        {newOptions.map((item, i) => {
          return (
            <option key={i} value={options[i].split(" ").join("")}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
