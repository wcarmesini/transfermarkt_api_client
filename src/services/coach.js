import { fetchTm } from "../tmapi.js";

/**
 * Retrieves the profile of a specific coach.
 *
 * @param {number} coachId - The unique identifier of the coach.
 * @returns {Promise<object|null>} A promise that resolves with the coach's profile data, or `null` if an error occurs.
 */
export async function coachProfile(coachId) {
  return fetchTm(`coach/${coachId}`);
}

/**
 * Retrieves information for multiple coaches in a single request.
 *
 * @param {number[]} coachesIds - An array of unique coach IDs.
 * @returns {Promise<object|null>} A promise that resolves with the data of the requested coaches, or `null` if an error occurs.
 * @throws {Error} If `coachesIds` is not an array of numbers.
 */
export async function coachesInfo(coachesIds = []) {
  if (!Array.isArray(coachesIds) || !coachesIds.every(id => typeof id === 'number')) {
    throw new Error("coachesIds must be an array of numbers");
  }
  const queryString = coachesIds.map(id => `ids[]=${id}`).join('&');
  const endpoint = `coaches?${queryString}`;
  return fetchTm(endpoint);
}
