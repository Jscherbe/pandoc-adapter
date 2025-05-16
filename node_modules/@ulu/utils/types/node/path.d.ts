/**
 * Get the directory path for a file URL
 * - Useful for __dirname from es module in node
 * @param {String} url The url string, ie 'import.meta.url'
 * @return {String} The directory path
 * @throws {TypeError} If url is not a string
 * @example
 * const __dirname = getUrlDirname(import.meta.url);
 */
export function getUrlDirname(url: string): string;
/**
 * Resolve a relative path from a file URL
 * - useful for resolving paths relative to import.meta.url
 * @param {String} url The url string, ie 'import.meta.url'
 * @param {String} relativePath The relative file path to resolve.
 * @return {String} The resolved absolute path
 * @throws {TypeError} If url or relativePath is not a string
 * @example
 * const filePath = resolveFromUrlDir(import.meta.url, "my-file.txt");
 */
export function resolveFromUrlDir(url: string, relativePath: string): string;
//# sourceMappingURL=path.d.ts.map