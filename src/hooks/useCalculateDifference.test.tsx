import { jest, describe, test, expect } from '@jest/globals';
import { fetchCalculation } from './useCalculateDifference';

describe('useCalculateDifference', () => {

  test('it calls the API with the correct inputs', async () => {
    // @ts-expect-error -- We don't need to mock the entire fetch response.
    global.fetch = jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: async () => ({ foo: '' })
      })
    });

    await fetchCalculation(5);

    expect(global.fetch).toHaveBeenCalledWith('/api/calculate', {
      method: 'POST',
      body: JSON.stringify({ value: 5 }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  test('it throws an error if the API call fails', async () => {
    // @ts-expect-error -- We don't need to mock the entire fetch response.
    global.fetch = jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: async () => ({ foo: '' })
      })
    });

    await expect(fetchCalculation(5)).rejects.toThrow('Failed to fetch data from the API');
  });
})