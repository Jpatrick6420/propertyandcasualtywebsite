function ContextModal({ message, rule, bgcolor = "red", right = "2" }) {
  const colors = {
    red: "bg-red-200",
    blue: "bg-blue-200",
    green: "bg-green-200",
    amber: "bg-amber-200",
  };

  const positions = {
    2: "-right-2",
    4: "-right-4",
    6: "-right-6",
    10: "-right-10",
    20: "-right-20",
    44: "-right-44",
    64: "-right-64",
  };

  const styles = `
    absolute text-[10px] -bottom-2 rounded-xl px-2
    ${colors[bgcolor] ?? colors.red}
    ${positions[right] ?? positions[2]}
    ${rule ? "block" : "hidden"}
  `;

  return (
    <div className={styles}>
      <p>{message}</p>
    </div>
  );
}

export default ContextModal;
