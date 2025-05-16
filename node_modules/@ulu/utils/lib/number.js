/**
 * @module number
 */


/**
 * Test if number is within min and max
 * @param {Number} number
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
export function isBetween(number, min, max) {
  return number >= min && number <= max;
}

/**
 * Get the average of numbers
 * @param  {...Number} numbers Numbers to get the average of (use spread to use with array)
 * @returns 
 */
export function average(...numbers) {
  return sum(...numbers) / (numbers.length + 1);
}

/**
 * Get the summation of numbers
 * @param {...Number} numbers Numbers to be added (use spread to use with array)
 */
export function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}