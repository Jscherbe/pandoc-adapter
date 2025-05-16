/**
 * @module string
 */

import { htmlTag, multiSpace, linebreaks } from "./regex.js";

/**
 * Capitalize First Letter
 * @param {String} string String to capitolize
 * @returns {String} 
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert string to characters safe for URL
 * @param {String} string The string to convert 
 * @returns {String}
 */
export function urlize(string) {
  var newString;
  string = string.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-");
  newString = string && string.replace(/[^-_a-zA-Z0-9]+/g, "-");
  return newString.toLowerCase();
}

/**
 *   Will return an object with the separation details
 *   @param  {String} string CSS number with unit
 *   @return {Object}        keys: value, original, unit
 */
export function separateCssUnit(original) {
  const pattern = /(px|vw|vh|%|em|rem)/i;
  return {
    original,
    value: parseFloat(original.replace(pattern, "")),
    unit: original.match(pattern)[0]
  };
}

/**
 * Removes HTML tags from string (can be used in Node)
 * - Different than DOM version
 * - Note you can use document.createElement and grab textContent (but this could execute code in browser)
 * - The method below will just use regex without creating Nodes
 * @param {String} html HTML string to find/replace
 */
export function stripTags(html) {
  return html.replace(htmlTag, "");
}

/**
 * Remove double spaces
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimDoubleSpaces(string) {
  return string.replace(multiSpace, "");
}

/**
 * Remove line breaks
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimLineBreaks(string) {
  return string.replace(linebreaks, "");
}


/**
 * Designed originally to flatten style definitions
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimWhitespace(string) {
  return string.replace(linebreaks, "")
    .replace(multiSpace, " ")
    .trim();
}

/**
 *   Truncates string with ellipsis if over the max, note use framework function
 *   if you need to know the effects of the truncate process (returns an object 
 *   with info instead) this function only modifies the string
 *   @param  {string} string    String to possibly truncate
 *   @param  {number} max       How many characters max?
 *   @return {string}     
 */
export function truncate(string, max, overflowChar = "…") {
  return string.length <= max ? string : string.slice(0, max) + overflowChar;
}

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
export function toInitials(string, short) {
  const notAllowed = /[^A-Z0-9\s-]/gi;
  const seperators = /[\s-]+/g;
  const parts = string.replace(notAllowed, "").split(seperators);
  const isShort = short && parts.length > 2;
  const final = isShort ? [parts.shift(), parts.pop()] : parts;
  return final.map(part => part.substring(0, 1).toUpperCase()).join("");
}

/**
 * Convert string to title case
 * @param {String} string String to convert to title case
 * @param {Array} exceptions Array of words that shouldn't be title case, common words are included by default
 * @param {Array} defaults Default exceptions incase you want full control
 * @returns {String} 
 */
export function titleCase(
  string, 
  exceptions = [], 
  defaults = [
    "a", "an", "or", "nor", "is", "and", "to", "in", "per", "on", "for", "by", 
    "at", "as", "the", "etc"
  ]
) {
  const all = [...defaults, ...exceptions];

  // Change each word to uppercase if given word isn't an exception
  return string.replace(/\w\S*/g, (txt, offset) => {
    // The following uses an regular expression to match words in the replace method
    // The ternary return is checking if (the matched word is an exception) and then if 
    // it is not the first word for a given sentence (offset)
    // return it in uppercase. If not it was an exception and is not the first word.
    return all.indexOf(txt) > -1 && offset !== 0 ? 
      txt : txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

/**
 * Function that matches regex against string and returns details helpful for replacing/using/highlighting a single match within a string
 * @param {String} string The string to extract from
 * @param {Regex} regex The regular expression to match against
 * @returns {Object|Null} If match return object with { matched, startIndex, endIndex, before, after }, when no match is found this return null
 */
export function extractMatchDetails(string, regex) {
  const match = string.match(regex);
  if (match) {
    const matched = match[0];
    const startIndex = match.index;
    const endIndex = startIndex + matched.length;
    return { 
      matched, 
      startIndex,
      endIndex,
      before: string.slice(0, startIndex), 
      after: string.slice(endIndex)
    };
  } else {
    return null;
  }
}