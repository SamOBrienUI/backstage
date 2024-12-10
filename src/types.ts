export type CalculationResult = {
  datetime: string;
  last_datetime: string;
  number: number; // Input
  occurrences: number;
  value: number; // Solution
};

// AKA the network response cache
export type CalculationHistory = {
  [key: number]: {
    datetime: string;
    value: number;
    number: number;
    occurrences: number;
    last_datetime: string;
  };
};
