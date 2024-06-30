function stringToDate(dateStr: string): Date {
  const dateParts = dateStr.split("/").map((part) => parseInt(part, 10));
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Expected 'AAAA/MM/DD'");
  }

  const [year, month, day] = dateParts;
  return new Date(year, month - 1, day);
}

export { stringToDate };
