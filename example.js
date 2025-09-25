import { playerProfile } from './src/services/index.js';
import util from 'node:util';

/**
 * Example script to fetch and display a player's profile from Transfermarkt.
 *
 * Demonstrates how to use the `playerProfile` service function and
 * display the result in a readable format using Node.js `util.inspect`.
 */

// Fetch the profile of the player with ID 28003 (Lionel Messi)
const result = await playerProfile(28003);

/**
 * Prints the result to the console using util.inspect for better readability.
 * 
 * Options:
 * - showHidden: false      // Do not show non-enumerable properties
 * - depth: null            // Show the full nested object
 * - colors: true           // Add ANSI colors for readability
 */
console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }));