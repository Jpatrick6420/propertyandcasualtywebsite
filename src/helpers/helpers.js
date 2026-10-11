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
