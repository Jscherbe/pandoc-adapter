/**
 * @module node/fs
 */

import { readFileSync } from "fs";
import { resolveFromUrlDir } from "./path.js";

/**
 * Reads a file synchronously relative to a URL's directory.
 * @param {String} url The URL representing the module's location (e.g., import.meta.url).
 * @param {String} relativePath The relative path to the file.
 * @param {object|String} [options] The options to pass to readFileSync.
 * @returns {Buffer|String} The file contents.
 * @throws {TypeError} If url or relativePath is not a string.
 * @throws {Error} If there is an error reading the file.
 * @example
 * const text = readFileSyncFromUrl(import.meta.url, "text-file.txt", "utf8");
 */
export function readFileSyncFromUrl(url, relativePath, options) {
  if (typeof url !== "string" || typeof relativePath !== "string") {
    throw new TypeError("url and relativePath must be strings");
  }
  try {
    return readFileSync(resolveFromUrlDir(url, relativePath), options);
  } catch (error) {
    throw new Error(`Error reading file "${ relativePath }": ${ error.message }`);
  }
}