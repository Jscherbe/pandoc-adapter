/**
 * @module browser/print
 */

/**
 * Print HTML content
 * @param {String} content Content (HTML) to print
 */
export function printOnly(content) {
  const w = window.open();
  w.document.write(content);
  w.print();
  w.close();
}
/**
 * Print element only - No styling, just inner HTML
 * @param {Node} element Element to print
 */
export function printElement(element) {
  var content = element.innerHTML;
  printOnly(content);
}


