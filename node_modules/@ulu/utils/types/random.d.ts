/**
 * @module random
 */
/**
 * Returns a randome item from the array
 * @param {Array} array
 * @returns Item from array
 */
export function randomArrayItem(array: any[]): any;
/**
 * Returns a random timestamp (hours:minutes:seconds)
 */
export function randomTimeStamp(hoursMax?: number, minutesMax?: number, secondsMax?: number): string;
/**
 * Calls callback at random intervals
 * @param {*} callback Function to call on interval
 * @param {Number} min Minimium interval (ms)
 * @param {*} max Maximum interval (ms)
 * @returns {Function} Function to stop
 */
export function randomInterval(callback: any, min?: number, max?: any): Function;
/**
 * @param {Number} min
 * @param {Number} max
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {Number}
 */
export function randomInt(min?: number, max?: number): number;
/**
 * Generates a random string of defined length based on
 * a string of allowed characters.
 *
 * @param  {number} length  How many random characters will be in the returned string. Defaults to 10
 * @param  {string} allowed Which characters can be used when creating the random string. Defaults to A-Z,a-z,0-9
 * @return {string}         A string of random characters
 */
export function randomString(length?: number, allowed?: string): string;
//# sourceMappingURL=random.d.ts.map