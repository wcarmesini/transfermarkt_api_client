/**
 * @fileoverview
 * Central export module for Transfermarkt API service functions.
 *
 * This file re-exports all service modules, providing a single entry point
 * to access the following functionalities:
 * 
 * - Game-related data (`game.js`)
 * - Player-related data (`player.js`)
 * - Club-related data (`club.js`)
 * - Competition-related data (`competition.js`)
 * - General utilities (`general.js`)
 * - Referee-related data (`referee.js`)
 * - Coach-related data (`coach.js`)
 * - Stadium-related data (`stadium.js`)
 *
 * Example usage:
 * ```javascript
 * import { playerProfile, clubInfo, competitionTable } from './services';
 *
 * const profile = await playerProfile(28003);
 * const club = await clubInfo(4);
 * ```
 */

// Re-export all service modules
export * from './game.js';
export * from './player.js';
export * from './club.js';
export * from './competition.js';
export * from './general.js';
export * from './referee.js';
export * from './coach.js';
export * from './stadium.js';