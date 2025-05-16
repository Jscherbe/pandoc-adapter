/**
 * @module regex
 */

/**
 * Match line break characters (global multiline)
 */
export const linebreaks = /(\r\n|\n|\r)/gm;
/**
 * Match multiple spaces (global)
 */
export const multiSpace = /\s+/g;
/**
 * Match html tag (global)
 */
export const htmlTag = /<\/?[^>]+(>|$)/g;