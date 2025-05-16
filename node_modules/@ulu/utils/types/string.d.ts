/**
 * Capitalize First Letter
 * @param {String} string String to capitolize
 * @returns {String}
 */
export function capitalizeFirstLetter(string: string): string;
/**
 * Convert string to characters safe for URL
 * @param {String} string The string to convert
 * @returns {String}
 */
export function urlize(string: string): string;
/**
 *   Will return an object with the separation details
 *   @param  {String} string CSS number with unit
 *   @return {Object}        keys: value, original, unit
 */
export function separateCssUnit(original: any): any;
/**
 * Removes HTML tags from string (can be used in Node)
 * - Different than DOM version
 * - Note you can use document.createElement and grab textContent (but this could execute code in browser)
 * - The method below will just use regex without creating Nodes
 * @param {String} html HTML string to find/replace
 */
export function stripTags(html: string): string;
/**
 * Remove double spaces
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimDoubleSpaces(string: string): string;
/**
 * Remove line breaks
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimLineBreaks(string: string): string;
/**
 * Designed originally to flatten style definitions
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimWhitespace(string: string): string;
/**
 *   Truncates string with ellipsis if over the max, note use framework function
 *   if you need to know the effects of the truncate process (returns an object
 *   with info instead) this function only modifies the string
 *   @param  {string} string    String to possibly truncate
 *   @param  {number} max       How many characters max?
 *   @return {string}
 */
export function truncate(string: string, max: number, overflowChar?: string): string;
/**
 * Converts a string to initials
 * - Example "Jane Allen-Doe" --> "JAD"
 * - Example (short) "Jane Allen-Doe" --> "JD"
 * - Example "Wow this part-time" --> "WTPT"
 * - Example "Wow There are 2 !! People." --> "WTA2P"
 * @param {String} string String to convert
 * @param {Boolean} short If true the initials will be limited to two letters, unless it's only one word which would be single letter
 * @returns {String}
 */
export function toInitials(string: string, short: boolean): string;
/**
 * Convert string to title case
 * @param {String} string String to convert to title case
 * @param {Array} exceptions Array of words that shouldn't be title case, common words are included by default
 * @param {Array} defaults Default exceptions incase you want full control
 * @returns {String}
 */
export function titleCase(string: string, exceptions?: any[], defaults?: any[]): string;
/**
 * Function that matches regex against string and returns details helpful for replacing/using/highlighting a single match within a string
 * @param {String} string The string to extract from
 * @param {Regex} regex The regular expression to match against
 * @returns {Object|Null} If match return object with { matched, startIndex, endIndex, before, after }, when no match is found this return null
 */
export function extractMatchDetails(string: string, regex: Regex): any | null;
//# sourceMappingURL=string.d.ts.map