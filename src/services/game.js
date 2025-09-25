import { fetchTm } from "../tmapi.js";

/**
 * Retrieves detailed information about a specific game.
 *
 * @param {number} gameId - The unique identifier of the game.
 * @returns {Promise<object|null>} A promise that resolves with the game data, or `null` if an error occurs.
 */
export async function game(gameId) {
  return fetchTm(`game/${gameId}`);
}

/**
 * Retrieves live details of a specific game.
 *
 * @param {number} gameId - The unique identifier of the game.
 * @returns {Promise<object|null>} A promise that resolves with the live game details, or `null` if an error occurs.
 */
export async function gameLiveDetail(gameId) {
  return fetchTm(`game/${gameId}/live-detail`);
}
