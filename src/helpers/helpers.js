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
export { calcAge, formatDate };
