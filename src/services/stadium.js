import { fetchTm } from "../tmapi.js";

/**
 * Retrieves detailed information about a specific stadium.
 *
 * @param {number} stadiumId - The unique identifier of the stadium.
 * @returns {Promise<object|null>} A promise that resolves with the stadium data, or `null` if an error occurs.
 */
export async function stadiumInfo(stadiumId) {
  return fetchTm(`stadium/${stadiumId}`);
}
