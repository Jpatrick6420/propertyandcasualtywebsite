function ContextModal({ message, rule, bgcolor = "red", right = "2" }) {
  let styles = `absolute text-[10px] -right-${right} -bottom-2 bg-${bgcolor}-200 rounded-xl px-2 `;
  if (rule === true) {
    styles += ` block`;
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
