
/**
 * The sum of the squares of the first ten natural numbers is:

1^2 + 2^2 + ... + 10^2 = 385
*/
export function calcSumOfSquares(n: number): number {
  const listOfSquares = Array.from({ length: n }, (_, i) => i + 1).map((x) => x ** 2);
  return listOfSquares.reduce((a, b) => a + b);
}
