import { fetchTm } from "../tmapi.js";

/**
 * Retrieves the profile of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's profile data, or `null` if an error occurs.
 */
export async function playerProfile(playerId) {
  return fetchTm(`player/${playerId}`);
}

/**
 * Retrieves information for multiple players in a single request.
 *
 * @param {number[]} playersIds - An array of unique player IDs.
 * @returns {Promise<object|null>} A promise that resolves with the requested players' data, or `null` if an error occurs.
 * @throws {Error} If `playersIds` is not an array of numbers.
 */
export async function playersInfo(playersIds = []) {
  if (!Array.isArray(playersIds) || !playersIds.every(id => typeof id === 'number')) {
    throw new Error("playersIds must be an array of numbers");
  }
  const queryString = playersIds.map(id => `ids[]=${id}`).join('&');
  const endpoint = `players?${queryString}`;
  return fetchTm(endpoint);
}

/**
 * Retrieves the image gallery of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's gallery data, or `null` if an error occurs.
 */
export async function playerGallery(playerId) {
  return fetchTm(`player/${playerId}/gallery`);
}

/**
 * Retrieves the performance data of a specific player, optionally filtered by season.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @param {object} [query={}] - Optional query parameters (e.g., { season: '2022/2023' }).
 * @param {string} [query.season] - The season to filter performance data.
 * @returns {Promise<object|null>} A promise that resolves with the player's performance data, or `null` if an error occurs.
 */
export async function playerPerformance(playerId, query = {}) {
  let endpoint = `player/${playerId}/performance`;
  if (query.season) endpoint += `?season=${query.season}`;
  return fetchTm(endpoint);
}

/**
 * Retrieves the injury history of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's injury history, or `null` if an error occurs.
 */
export async function playerInjuries(playerId) {
  return fetchTm(`player/${playerId}/injury`);
}

/**
 * Retrieves the market value history of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's market value history, or `null` if an error occurs.
 */
export async function playerMarketValueHistory(playerId) {
  return fetchTm(`player/${playerId}/market-value-history`);
}

/**
 * Retrieves the international career history of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's national career data, or `null` if an error occurs.
 */
export async function playerNationalCarrer(playerId) {
  return fetchTm(`player/${playerId}/national-career-history`);
}

/**
 * Retrieves the transfer history of a specific player.
 *
 * @param {number} playerId - The unique identifier of the player.
 * @returns {Promise<object|null>} A promise that resolves with the player's transfer history, or `null` if an error occurs.
 */
export async function playerTransferHistory(playerId) {
  return fetchTm(`transfer/history/player/${playerId}`);
}

/**
 * Retrieves general performance data for multiple players.
 *
 * @returns {Promise<object|null>} A promise that resolves with players' performance data, or `null` if an error occurs.
 */
export async function playersPerformance() {
  return fetchTm(`players/performance`);
}
