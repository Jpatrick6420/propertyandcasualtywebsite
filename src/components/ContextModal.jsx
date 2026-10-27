function ContextModal({ message, rule }) {
  let styles =
    "absolute text-[10px] -right-4 -bottom-2 bg-red-200 rounded-xl px-2 ";
  if (rule === true) {
    styles += " block";
  } else {
    styles += " hidden";
  }

  return (
    <div className={styles}>
      <p>{message}</p>
    </div>
  );
}

export default ContextModal;
