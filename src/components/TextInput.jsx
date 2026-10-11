function TextInput({ label, handler, startValue, item, attribute }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        onChange={(e) =>
          handler((prev) => ({
            ...prev,
            [item]: { ...prev[item], [attribute]: e.target.value },
          }))
        }
        placeholder={startValue}
      />
    </div>
  );
}

export default TextInput;
