import { fetchTm } from "../tmapi.js";

/**
 * Retrieves detailed information about a specific competition.
 *
 * @param {string} code - The competition code (e.g., "GB1" for Premier League).
 * @returns {Promise<object|null>} A promise that resolves with the competition data, or `null` if an error occurs.
 */
export async function competitionInfo(code) {
  return fetchTm(`competition/${code}`);
}

/**
 * Retrieves the standings table of a specific competition.
 *
 * @param {string} code - The competition code.
 * @returns {Promise<object|null>} A promise that resolves with the competition table data, or `null` if an error occurs.
 */
export async function competitionTable(code) {
  return fetchTm(`competition/${code}/table`);
}

/**
 * Retrieves information for multiple competitions in a single request.
 *
 * @param {number[]} competitionsIds - An array of unique competition IDs.
 * @returns {Promise<object|null>} A promise that resolves with the data of the requested competitions, or `null` if an error occurs.
 * @throws {Error} If `competitionsIds` is not an array of numbers.
 */
export async function competitionsInfo(competitionsIds = []) {
  if (!Array.isArray(competitionsIds) || !competitionsIds.every(id => typeof id === 'number')) {
    throw new Error("competitionsIds must be an array of numbers");
  }
  const queryString = competitionsIds.map(id => `ids[]=${id}`).join('&');
  const endpoint = `competitions?${queryString}`;
  return fetchTm(endpoint);
}
