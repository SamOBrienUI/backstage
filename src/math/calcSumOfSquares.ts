export function calcSumOfSquares(n: number): number {
  const listOfSquares = Array.from({ length: n }, (_, i) => i + 1).map(
    (x) => x ** 2
  );

  return listOfSquares.reduce((a, b) => a + b);
}
