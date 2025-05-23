/**
 * Removes all style attributes from img tags in an HTML string using PostHTML.
 *
 * @param {string} html - The HTML string to process.
 * @returns {Promise<string>} A Promise that resolves with the processed HTML string.
 */
export function htmlRemoveImageStyles(html: string): Promise<string>;
/**
 * Removes width and height attributes from image tags in a Markdown string.
 *
 * @param {string} markdown - The Markdown string to process.
 * @returns {string} The Markdown string with width and height attributes removed from image tags.
 */
export function markdownRemoveImageDimensions(markdown: string): string;
/**
 * Eleventy Transform HTML Pretty
 * - Indents and cleans up HTML for packaging (not minify)
 * @param {String} content - The content HTML to make pretty
 * @param {String} beautifyOptions - Options passed to js beautify library
 */
export default function htmlPretty(content: string, beautifyOptions?: string): any;
/**
 * Processes HTML by removing image styles and then pretty-formatting it.
 *
 * @param {string} html - The HTML string to process.
 * @param {object} beautifyOptions - Options to be passed to jsBeautify library for html cleanup
 * @returns {Promise<string>} A Promise that resolves with the processed and pretty-formatted HTML string.
 */
export function cleanHtml(html: string, beautifyOptions: object): Promise<string>;
/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The URL-friendly slug.
 */
export function urlize(string: string): string;
//# sourceMappingURL=utils.d.ts.map