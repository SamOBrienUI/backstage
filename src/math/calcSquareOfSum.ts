export function calcSquareOfSum(n: number): number {
  // i.e. 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> 55^2 = 3025
  const sum = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );

  return sum ** 2;
}
