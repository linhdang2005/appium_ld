function parseDate(dateString) {
  // dateString: "2026-01-26"
  const [year, month, day] = dateString.split("-");

  return {
    year: parseInt(year),
    month: parseInt(month), // 1 - 12
    day: parseInt(day)
  };
}

module.exports = { parseDate };
