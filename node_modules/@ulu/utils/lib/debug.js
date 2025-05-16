/**
 * @module debug
 */

/**
 * Utility for adding logs in areas that need the value returned
 */
export function debugThrough(value, label) {
  console.log(`${ label }:\n`, value);
  return value;
}