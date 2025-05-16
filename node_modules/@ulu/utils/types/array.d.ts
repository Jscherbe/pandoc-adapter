/**
 * @module array
 */
/**
 * Tests an array agains another array, returns true
 * if the array has all items in the required array
 * @param {Array} array Array to test on
 * @param {Array} required Elements that should be present in the array
 * @returns {Boolean}
 */
export function arrayHas(array: any[], required: any[]): boolean;
/**
 * Adds properties to an array of objects
 * @param {Array} array Array of Objects
 * @param {Object} props Properties to add to each object in array
 */
export function arrayAssign(array: any[], props: any): any[];
/**
 * Creates a new array of X length and fills the array using callback
 * @param {Number} count Number of elements to create
 * @param {Funtion} callback Callback to template the array element (passed only index)
 * @returns Array
 */
export function arrayCreate(count: number, callback: Funtion): any[];
/**
 * Removes an array element (modifies array)
 * @param {Array} array Array to remove element from
 * @param {Element} element Array element to remove
 */
export function removeArrayElement(array: any[], element: Element): void;
/**
 * Searches array for first item matching test, beginning at a start index but searching the entire array
 * @param {Array} array Array to search
 * @param {Number} start The index in the array to start the search from
 * @param {Function} callback A test function that is passed array item and index
 */
export function offsetFindIndexOf(array: any[], start: number, callback: Function): number;
/**
 * Remove duplicate items in array
 * @param {Array} array Array to remove duplicates from
 * @returns {Array} New array with duplicates removed
 */
export function removeDuplicates(array: any[]): any[];
/**
 * Create empty matrix with optional value
 * @param {Number} columnCount
 * @param {Number} rowCount
 * @param {*} value Value to set, default is null
 * @returns {Array.Array} Matrix (array of arrays)
 */
export function createEmptyMatrix(columnCount: number, rowCount: number, value?: any): Array.Array;
/**
 * Joins an array into sentence form
 * - IE ["2013", "2015", "2020"] --> "2013, 2015 and 2020"
 * @param {Array.<String, Number>} arr Array to join
 * @returns {String}
 */
export function joinForSentence(array: any): string;
/**
 * Test whether an index in an array is first or last
 * - Returns an object with both first/last keys (true/false)
 * @param {Array} array Array to check index against (uses .length)
 * @param {Number} index Index to get info for
 * @returns {Object} { first: {Boolean}, last: {Boolean} }
 */
export function getFirstLast(array: any[], index: number): any;
/**
 * Filter Array In Place
 * - Will not copy array, mutates the array passed (instead of copy [ie. Array.filter()])
 * - Note, removes items in reverse order (end-to-start of array), test will be called on last item first and so on
 * @param {Array} array The array to filter items from
 * @param {Function} test A function to filter elements based on a truthy/falsy condition
 * @returns {Array} The original array
 */
export function filterInPlace(array: any[], test: Function): any[];
//# sourceMappingURL=array.d.ts.map