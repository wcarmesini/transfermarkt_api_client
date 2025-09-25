import { fetchTm } from "../tmapi.js";

/**
 * Performs a quick search on Transfermarkt.
 *
 * @param {string} queryText - The search text.
 * @returns {Promise<object|null>} A promise that resolves with the search results, or `null` if an error occurs.
 */
export async function searchTransfermarkt(queryText) {
  const query = `quick-search?term=${encodeURIComponent(queryText)}`;
  return fetchTm(query);
}

/**
 * Retrieves general attributes available in the API.
 *
 * @returns {Promise<object|null>} A promise that resolves with the attributes data, or `null` if an error occurs.
 */
export async function attributes() {
  return fetchTm(`attributes`);
}
