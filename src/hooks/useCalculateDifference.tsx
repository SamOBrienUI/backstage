import { CalculationResult, CalculationHistory } from "@/types";
import { useState } from "react";


// Keep fetcher out of the hook so it's not recreated on every render.
export async function fetchCalculation(input: number): Promise<CalculationResult> {
  const response = await fetch('/api/calculate', {
    method: 'POST',
    body: JSON.stringify({ value: input }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from the API');
  }

  return response.json();
}

export function useCalculateDifference() {
  // Local State
  const [cache, setCache] = useState<CalculationHistory>({});

  // Function that runs the calculation through from the API and updates the cache
  const calculateDifference = async (input: number) => {
    // If the entry already exists in the cache, update the necessary fields, then return the needed cache entry.
    if (cache[input]) {
      setCache((prevCache) => {
        return {
          ...prevCache,
          [input]: {
            ...prevCache[input],
            occurrences: prevCache[input].occurrences + 1, // Bump the occurrences field
            last_datetime: prevCache[input].datetime, // Update the last_datetime field to the previous datetime
            datetime: new Date().toISOString() // Set the new date time
          }
        }
      })
      return cache[input];
    }

    // Otherwise, we'll run the calculations on the API and add it to the cache.
    const result = await fetchCalculation(input);

    setCache((prevCache) => {
      return {
        ...prevCache,
        [input]: result
      }
    });

    return result;
  }

  return {
    calculationHistory: cache,
    calculateDifference
  }
}