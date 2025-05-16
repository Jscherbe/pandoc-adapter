/**
 * @module browser/performance
 */
/**
 * Run a function after the browser finishes a paint/render
 * @param {Function} callback Function to execute after paint
 * @see https://webperf.tips/tip/measuring-paint-time/
 */
export function runAfterFramePaint(callback: Function): void;
/**
 * Debounces function using requestAnimationFrame()
 * @param  {Function} callback Function to invoke, cancelled if called faster than RAF
 * @param  {Object} context Optional context to bind to callback
 */
export function debounceAnimationFrame(callback: Function, context?: any): (...args: any[]) => void;
//# sourceMappingURL=performance.d.ts.map