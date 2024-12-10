import type { NextApiRequest, NextApiResponse } from "next";
import { calcDifference, calcSquareOfSum, calcSumOfSquares } from "@/math";
import { CalculationResult } from "@/types";

type Input = {
  value: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CalculationResult>
) {
  const input: Input = req.body;

  // Calculate the sum of the squares of the first ten natural numbers
  const sumOfSquares = calcSumOfSquares(input.value);

  // Calculate the square of the sum of the first ten natural numbers
  const squareOfSum = calcSquareOfSum(input.value);

  // Calculate the difference between the sum of the squares and the square of the sum
  const value = calcDifference(squareOfSum, sumOfSquares);

  // Create a date string for the datetime and last_datetime fields
  const date = new Date().toISOString();

  // Build the output object.

  const resp: CalculationResult = {
    datetime: date,
    occurrences: 1,
    last_datetime: date,
    value: value,
    number: input.value,
  };

  res.status(200).json(resp);
}
