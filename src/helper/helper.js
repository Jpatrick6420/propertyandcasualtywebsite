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

function calcAge(year) {
  const thisYear = new Date().getFullYear();
  const numYear = Number(year);

  return numYear > 1000 ? thisYear - numYear : numYear;
}

function formatDate(date) {
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };
  const newDate = new Date(date).toLocaleString("en-US", options);
  return newDate;
}
const formatName = (name, separation = " ") => {
  const splitName = name.split(separation);
  const formattedName = splitName.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return `${firstLetter}${restOfWord}`;
  });
  return formattedName.join(" ");
};
export { calcAge, formatDate, formatName };

export default extractText;
