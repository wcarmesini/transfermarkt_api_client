import axios from 'axios';
import NodeCache from 'node-cache';

const BASE_URL = 'https://tmapi-alpha.transfermarkt.technology/';
const HEADERS = {
  'Accept': 'application/json',
  'Accept-Language': 'pt-BR',
  'User-Agent': 'Mozilla/5.0'
};

// Simple cache (default TTL: 5 minutes)
const cache = new NodeCache({ stdTTL: 300 });

// Axios instance
const tmapi = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
  timeout: 5000 // 5 seconds
});

/**
 * Internal function to perform requests to the Transfermarkt API with caching.
 *
 * @param {string} endpoint - The API endpoint to access.
 * @returns {Promise<object|null>} A promise that resolves with the response data, or `null` if an error occurs.
 */
export async function fetchTm(endpoint) {

  // Check cache
  const cached = cache.get(endpoint);
  if (cached) {
    console.log(`[TMAPI] Cache hit for ${endpoint}`);
    return cached;
  }

  try {
    const response = await tmapi.get(endpoint);
    cache.set(endpoint, response.data); // Store in cache
    console.log(`[TMAPI] Fetched and cached ${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`[TMAPI] Error fetching ${endpoint}:`, error.response?.status || error.message);
    return null;
  }
}

// Export the axios instance for advanced usage if needed
export { tmapi };
