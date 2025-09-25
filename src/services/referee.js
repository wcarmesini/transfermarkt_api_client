import { fetchTm } from "../tmapi.js";

/**
 * Retrieves the profile of a specific referee.
 *
 * @param {number} refereeId - The unique identifier of the referee.
 * @returns {Promise<object|null>} A promise that resolves with the referee's profile data, or `null` if an error occurs.
 */
export async function refereeProfile(refereeId) {
  return fetchTm(`referee/${refereeId}`);
}

/**
 * Retrieves information for multiple referees in a single request.
 *
 * @param {number[]} refereeIds - An array of unique referee IDs.
 * @returns {Promise<object|null>} A promise that resolves with the requested referees' data, or `null` if an error occurs.
 * @throws {Error} If `refereeIds` is not an array of numbers.
 */
export async function refereesInfo(refereeIds = []) {
  if (!Array.isArray(refereeIds) || !refereeIds.every(id => typeof id === 'number')) {
    throw new Error("refereeIds must be an array of numbers");
  }
  const queryString = refereeIds.map(id => `ids[]=${id}`).join('&');
  const endpoint = `referees?${queryString}`;
  return fetchTm(endpoint);
}
