function TextInput({
  label,
  onChange,
  value,
  placeholder,
  children,
  decoration = "",
}) {
  return (
    <div className="grid md:grid-cols-2 mr-2 relative">
      <label className={decoration}>{label}</label>
      <input
        className="ml-2 mb-1 border-2 border-gray-600 relative"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
      />
      {children}
    </div>
  );
}

export default TextInput;
