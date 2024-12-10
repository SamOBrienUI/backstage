import { CalculationResult, CalculationHistory } from "@/types";
import { useState } from "react";


// Keep fetcher out of the hook so it's not recreated on every render
async function fetchMockApi(input: number): Promise<CalculationResult> {
  const response = await fetch('/api/calculate', {
    method: 'POST',
    body: JSON.stringify({ value: input }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  try {
    return response.json();
  } catch {
    throw new Error('Failed to fetch data from the API');
  };
}

export function useCalculateDifference() {
  // Local State
  const [cache, setCache] = useState<CalculationHistory>({});

  // Function that fetches data from the API and updates the cache
  const calculateDifference = async (input: number) => {
    // If the entry already exists in the cache, update the occurrences and last_datetime fields, then bail out.
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

    // Otherwise, we'll fetch the data from the API and add it to the cache.
    const { datetime, value, number, occurrences, last_datetime } = await fetchMockApi(input);
    const cacheEntry = { datetime, value, number, occurrences, last_datetime };

    setCache((prevCache) => {
      return {
        ...prevCache,
        [input]: cacheEntry
      }
    });

    return cacheEntry;
  }

  return {
    calculationHistory: cache,
    calculateDifference
  }
}