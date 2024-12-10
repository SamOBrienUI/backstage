/**
 * The square of the sum of the first ten natural numbers is:

(1 + 2 + ... + 10)^2 = 552 = 3025
 */

export function calcSquareOfSum(n: number): number {
  const sum = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (a, b) => a + b
  );
  
  return sum ** 2;
}
