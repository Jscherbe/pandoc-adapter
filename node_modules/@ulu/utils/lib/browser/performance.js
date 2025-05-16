/**
 * @module browser/performance
 */

/**
 * Run a function after the browser finishes a paint/render
 * @param {Function} callback Function to execute after paint
 * @see https://webperf.tips/tip/measuring-paint-time/
 */
export function runAfterFramePaint(callback) {
  requestAnimationFrame(() => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = callback;
    messageChannel.port2.postMessage(undefined);
  });
}

/**
 * Debounces function using requestAnimationFrame()
 * @param  {Function} callback Function to invoke, cancelled if called faster than RAF
 * @param  {Object} context Optional context to bind to callback
 */
export function debounceAnimationFrame(callback, context = null) {
  let tid;
  return function debounced() {
    const args = arguments;
    if (tid) window.cancelAnimationFrame(tid);
    tid = window.requestAnimationFrame(() => {
      tid = false;
      callback.apply(context, args);
    });
  };
}