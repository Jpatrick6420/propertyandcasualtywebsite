function TextInput({ label, handler, value }) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={(e) => handler(e)} placeholder={value} />
    </div>
  );
}

export default TextInput;
