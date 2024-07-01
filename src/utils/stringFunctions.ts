function validateNumericString(input: string): boolean {
  const numericRegex = /^\d+$/;
  return numericRegex.test(input);
}

function validateTextString(input: string): boolean {
  const textRegex = /^[a-zA-Z]{3,}$/;
  return textRegex.test(input);
}

export { validateNumericString, validateTextString };
