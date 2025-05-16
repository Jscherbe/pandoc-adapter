/**
 * A collection of utility functions for processing HTML, Markdown, and strings,
 * including removing image styles and dimensions, pretty-formatting HTML, and creating URL-friendly slugs.
 * @module utils
 */

import posthtml from "posthtml";
import { prettify } from "htmlfy";
import { convert as urlSlug } from "url-slug";

/**
 * Removes all style attributes from img tags in an HTML string using PostHTML.
 *
 * @param {string} html - The HTML string to process.
 * @returns {Promise<string>} A Promise that resolves with the processed HTML string.
 */
export async function htmlRemoveImageStyles(html) {
  try {
    const result = await posthtml([
      (tree) => {
        tree.match({ tag: "img" }, (item) => {
          if (item.attrs && item.attrs.style) {
            delete item.attrs.style;
          }
          return item;
        });
      },
    ]).process(html);
    return result.html;
  } catch (error) {
    throw new Error(`Error processing HTML with PostHTML: ${ error.message }`);
  }
}

/**
 * Removes width and height attributes from image tags in a Markdown string.
 *
 * @param {string} markdown - The Markdown string to process.
 * @returns {string} The Markdown string with width and height attributes removed from image tags.
 */
export function markdownRemoveImageDimensions(markdown) {
  return markdown.replace(/{width="[0-9in.]+"\sheight="[0-9in.]+"}/g, "");
}

/**
 * Eleventy Transform HTML Pretty
 * - Indents and cleans up HTML for packaging (not minify)
 */
export default function htmlPretty(content) {
  return prettify(content, { tab_size: 2 });
}

/**
 * Processes HTML by removing image styles and then pretty-formatting it.
 *
 * @param {string} html - The HTML string to process.
 * @returns {Promise<string>} A Promise that resolves with the processed and pretty-formatted HTML string.
 */
export async function cleanHtml(html) {
  try {
    const cleanedHtml = await htmlRemoveImageStyles(html);
    const prettyHtml = htmlPretty(cleanedHtml);
    return prettyHtml;
  } catch (error) {
    throw new Error(`Error processing and prettifying HTML: ${ error.message }`);
  }
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The URL-friendly slug.
 */
export function urlize(string) {
  return urlSlug(string, {
    dictionary: { 
      "'" : "", 
      "`" : "", 
      "\"" : "", 
      "’" : "",
      "‘" : "",
      "”" : "", 
      "‟" : "",
    }
  });
}