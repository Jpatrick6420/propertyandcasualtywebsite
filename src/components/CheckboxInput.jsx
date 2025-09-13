function CheckboxInput({ label, isChecked, handler }) {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" checked={isChecked} onChange={(e) => handler(e)} />
    </div>
  );
}

export default CheckboxInput;
