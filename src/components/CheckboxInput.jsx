function CheckboxInput({ label, isChecked, handler }) {
  return (
    <div className="lg:flex lg:justify-around border-2 border-red-900 w-full">
      <label className="block">{label}</label>
      <input
        className="xs:block xs:w-full"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handler(e)}
      />
    </div>
  );
}

export default CheckboxInput;
