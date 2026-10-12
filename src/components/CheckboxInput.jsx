function CheckboxInput({ label, value, onChange }) {
  return (
    <div className="lg:flex lg:justify-around border-2 border-red-900 w-full">
      <label className="block">{label}</label>
      <input
        className="xs:block xs:w-full"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckboxInput;
