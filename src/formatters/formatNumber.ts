const numberFormatter = new Intl.NumberFormat("en-US");

export function formatNumber(input: number) {
  if (typeof input !== "number") {
    return "--";
  }

  return numberFormatter.format(input);
}
