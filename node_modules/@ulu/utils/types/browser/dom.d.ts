/**
 * @module browser/dom
 */
/**
 * Determine if the script is executing in a browser environment
 * @returns {Boolean}
 */
export function isBrowser(): boolean;
/**
 * Remove HTML elements from string
 * @param {String} html Source HTML
 * @returns {String} String version
 */
export function stripHtmlTags(html: string): string;
/**
 *   Returns an array of direct descendants
 *   @param  {Node}   element
 *   @param  {String} selector
 *   @return {Array}
 */
export function getDirectDescandants(element: Node, selector: string): any[];
/**
 *   Checks if element is overflown vertically
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflownY(element: Node): boolean;
/**
 *   Checks if element is overflown both vertically and horizontally
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflown(element: Node): boolean;
/**
 * For a given element return the first parent that has scrollable overflow
 * - Helpful for debugging position sticky
 * @param {Node} node Node to start search for first scrollable parent
 * @returns {Node}
 * @example
 *   const $navcontent = document.querySelector(".nav__content");
 *   if ($navcontent) {
 *     console.log(getScrollParent($navcontent));
 *   }
*/
export function getScrollParent(node: Node): Node;
/**
 *   Returns reliable document height
 *   @return {number}
 */
export function documentHeight(): number;
/**
 *   Returns reliable window height
 *   @return {number}
 */
export function windowHeight(): number;
/**
 *   Returns reliable window width
 *   @return {number}
 */
export function windowWidth(): number;
/**
 * Returns Node List from HTML markup string
 * @param {String} markup HTML markup to create into an element
 */
export function createElementFromHtml(markup: string): Element;
/**
 * Creates a new element with attributes and children
 * @param {Object} config Configuration object
 * @param {String} config.tag Node type (ie 'div')
 * @param {Object} config.attributes Attributes to add to the new element
 * @param {Array} config.children Array of children to append into the new element
 */
export function composeElement(config: {
    tag: string;
    attributes: any;
    children: any[];
}): HTMLElement;
//# sourceMappingURL=dom.d.ts.map