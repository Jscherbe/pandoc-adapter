/**
 * @module browser/dom
 */


/**
 * Determine if the script is executing in a browser environment
 * @returns {Boolean}
 */
export function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}

/**
 * Remove HTML elements from string
 * @param {String} html Source HTML
 * @returns {String} String version
 */
export function stripHtmlTags(html) {
  const parseHTML = new DOMParser().parseFromString(html, "text/html");
  const text = parseHTML.body.textContent || "";
  // Replace inline tags
  return text.replace(/<\/?[^>]+(>|$)/gi, "");
}

/**
 *   Returns an array of direct descendants
 *   @param  {Node}   element
 *   @param  {String} selector
 *   @return {Array}
 */
export function getDirectDescandants(element, selector) {
  return [...element.children].filter(child => child.matches(selector));
}

/**
 *   Checks if element is overflown vertically
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflownY(element) {
  return element.scrollHeight > element.clientHeight;
}

/**
 *   Checks if element is overflown both vertically and horizontally
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

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
export function getScrollParent(node) {
  if (node == null) {
    return null;
  }
  if (node.scrollHeight > node.clientHeight) {
    return node;
  } else {
    return getScrollParent(node.parentNode);
  }
}

/**
 *   Returns reliable document height
 *   @return {number}
 */
export function documentHeight() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}


/**
 *   Returns reliable window height
 *   @return {number}
 */
export function windowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

/**
 *   Returns reliable window width
 *   @return {number}
 */
export function windowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * Returns Node List from HTML markup string
 * @param {String} markup HTML markup to create into an element
 */
export function createElementFromHtml(markup) {
  const doc = new DOMParser().parseFromString(markup, "text/html");
  return doc.body.firstElementChild;
}

/**
 * Creates a new element with attributes and children
 * @param {Object} config Configuration object
 * @param {String} config.tag Node type (ie 'div')
 * @param {Object} config.attributes Attributes to add to the new element
 * @param {Array} config.children Array of children to append into the new element
 */
export function composeElement(config) { // tag, attributes = {}, children
  const { tag, attributes, children } = config;
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach((a, v) => element.setAttribute(a, v));
  }
  if (children) {
    children.forEach(c => element.appendChild(c));
  }
  return element;
}