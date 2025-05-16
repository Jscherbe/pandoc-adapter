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
export function readFileSyncFromUrl(url: string, relativePath: string, options?: object | string): Buffer | string;
//# sourceMappingURL=fs.d.ts.map