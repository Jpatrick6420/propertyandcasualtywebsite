function TextInput({ label, onChange, value, decoration = "" }) {
  return (
    <div className="grid md:grid-cols-2 mr-2">
      <label className={decoration}>{label}</label>
      <input
        className="ml-2 mb-1 border-2 border-gray-600"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
