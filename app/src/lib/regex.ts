export const isAsin = (input: string): boolean => {
  // Regulärer Ausdruck für die Überprüfung einer gültigen ASIN
  const asinRegex = /^\s*([A-Z0-9]{10})\s*$/;

  // Überprüfen, ob die Eingabe dem ASIN-Regex entspricht
  return asinRegex.test(input);
};
