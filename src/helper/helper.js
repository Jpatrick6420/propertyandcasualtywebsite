const extractText = (label, text) => {
  const num = `(\\d+(?:,\\d{3})*(?:\\.\\d+)?)`; // allows 900, 1,800, 1.0

  // Case 1: Same line → "Label<TAB>900"
  let m = text.match(new RegExp(`${escapeRegExp(label)}\\t\\s*${num}`));
  if (m) return m[1];

  // Case 2: Stacked → "900\nLabel"
  m = text.match(
    new RegExp(`\\n\\s*${num}\\s*\\n\\s*${escapeRegExp(label)}\\s*(?:\\n|$)`),
  );
  if (m) return m[1];

  return "";
};

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default extractText;
