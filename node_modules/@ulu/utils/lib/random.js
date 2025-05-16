/**
 * @module random
 */


/**
 * Returns a randome item from the array
 * @param {Array} array 
 * @returns Item from array
 */
export function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns a random timestamp (hours:minutes:seconds)
 */
export function randomTimeStamp(hoursMax = 12, minutesMax = 60, secondsMax = 60) {
  const r = max => randomInt(0, max).toString().padStart(2, "0");
  return `${ r(hoursMax) }:${ r(minutesMax) }:${ r(secondsMax) }`;
}

/**
 * Calls callback at random intervals
 * @param {*} callback Function to call on interval
 * @param {Number} min Minimium interval (ms)
 * @param {*} max Maximum interval (ms)
 * @returns {Function} Function to stop 
 */
export function randomInterval(callback, min = 2000, max = 6000) {
  let tid;
  const setup = () => {
    const duration = randomInt(min, max);
    tid = setTimeout(() => {
      callback();
      setup();
    }, duration);
  };
  setup();
  return () => {
    clearTimeout(tid);
  };
}

/**
 * @param {Number} min 
 * @param {Number} max 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @returns {Number}
 */
export function randomInt(min = 0, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min); 
}

/**
 * Generates a random string of defined length based on
 * a string of allowed characters.
 *
 * @param  {number} length  How many random characters will be in the returned string. Defaults to 10
 * @param  {string} allowed Which characters can be used when creating the random string. Defaults to A-Z,a-z,0-9
 * @return {string}         A string of random characters
 */
export function randomString(
  length = 10,
  allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }
  return result;
}