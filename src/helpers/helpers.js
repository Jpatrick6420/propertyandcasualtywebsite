function calcAge(year) {
  const thisYear = new Date().getFullYear();
  const numYear = Number(year);

  return numYear > 1000 ? thisYear - numYear : numYear;
}

export { calcAge };
