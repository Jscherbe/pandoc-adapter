/**
 * @module performance
 */


/**
 * Reusable throttle creator
 * @param {Function} timer Function like requestAnimationFrame
 * @returns {Function} Function to be used to create throttled functions based on passed timer
 */
export function throttle(timer) {
  let queued;
  return callback => {
    if (!queued) {
      timer(() => {
        const cb = queued;
        queued = null;
        cb();
      });
    }
    queued = callback;
  };
}

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered
 * @param {Function} callback Function to invoke 
 * @param {Number} wait  Amount of time after (milliseconds)
 * @param {Boolean} immediate  trigger the function on the leading edge, instead of the trailing.
 * @param {Object} valueThis  Context for function
 * @author David Walsh  
 *   - https://davidwalsh.name/javascript-debounce-function
 */
export function debounce(callback, wait, immediate, valueThis) {
  var timeout;
  return function executedFunction() {
    var context = valueThis || this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callback.apply(context, args);
  };
}