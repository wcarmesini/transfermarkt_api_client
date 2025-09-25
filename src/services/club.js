import { fetchTm } from "../tmapi.js";

/**
 * Retrieves detailed information about a specific club.
 *
 * @param {number} clubId - The unique identifier of the club.
 * @returns {Promise<object|null>} A promise that resolves with the club data, or `null` if an error occurs.
 */
export async function clubInfo(clubId) {
  return fetchTm(`club/${clubId}`);
}

/**
 * Retrieves information for multiple clubs in a single request.
 *
 * @param {number[]} clubIds - An array of unique club IDs.
 * @returns {Promise<object|null>} A promise that resolves with the data of the requested clubs, or `null` if an error occurs.
 * @throws {Error} If `clubIds` is not an array of numbers.
 */
export async function clubsInfo(clubIds = []) {
  if (!Array.isArray(clubIds) || !clubIds.every(id => typeof id === 'number')) {
    throw new Error("clubIds must be an array of numbers");
  }
  const queryString = clubIds.map(id => `ids[]=${id}`).join('&');
  const endpoint = `clubs?${queryString}`;
  return fetchTm(endpoint);
}

/**
 * Retrieves the squad (list of players) of a specific club.
 *
 * @param {number} clubId - The unique identifier of the club.
 * @returns {Promise<object|null>} A promise that resolves with the squad data, or `null` if an error occurs.
 */
export async function clubSquad(clubId) {
  return fetchTm(`club/${clubId}/squad`);
}

/**
 * Retrieves detailed information about a club's stadium.
 *
 * @param {number} clubId - The unique identifier of the club.
 * @returns {Promise<object|null>} A promise that resolves with the stadium data, or `null` if an error occurs.
 */
export async function clubStadium(clubId) {
  return fetchTm(`club/${clubId}/stadium`);
}

/**
 * Retrieves the transfer history of a specific club.
 *
 * @param {number} clubId - The unique identifier of the club.
 * @returns {Promise<object|null>} A promise that resolves with the transfer history data, or `null` if an error occurs.
 */
export async function clubTransferHistory(clubId) {
  return fetchTm(`transfer/history/club/${clubId}`);
}
