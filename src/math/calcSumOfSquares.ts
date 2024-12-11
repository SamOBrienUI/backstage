export function calcSumOfSquares(n: number): number {
  // i.e. 3 --> [1, 2, 3] --> [1^2, 2^2, 3^2] --> [1, 4, 9] --> 14
  const listOfSquares = Array.from({ length: n }, (_, i) => i + 1).map(
    (x) => x ** 2
  );

  return listOfSquares.reduce((a, b) => a + b, 0);
}
