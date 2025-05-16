/**
 * Executes the Pandoc binary to convert documents.
 *
 * @async
 * @param {object} config - Configuration object for the pandoc execution.
 * @param {string} [config.input=""] - The input content to be processed by Pandoc. This can be a string which will be piped to Pandoc's stdin. If arguments to Pandoc specify an input file or URL, this can be an empty string.
 * @param {string[]} [config.args=[]] - An array of command-line arguments to pass to the Pandoc binary (e.g., `['-f', 'markdown', '-t', 'html', 'input.md', '-o', 'output.html']`).
 * @param {Options} [config.options={}] - Additional options to pass which will be merged with the module's defaults.
 * @returns {Promise<string>} A Promise that resolves with the stdout from the Pandoc binary.
 * @throws {Error|string} Rejects with an error if the Pandoc binary fails and `allowErrors` or `allowStdoutError` are false.
 */
export function pandoc(config: {
    input?: string;
    args?: string[];
    options?: Options;
}): Promise<string>;
export type Options = {
    /**
     * - If true, resolves the promise with the stdout even on Pandoc process error.
     */
    allowError?: boolean;
    /**
     * - If true, resolves with the stdout even if Pandoc writes to stderr.
     */
    allowStdoutError?: boolean;
    /**
     * - Options passed directly to the `child_process.execFile` function.
     */
    execFile?: {
        maxBuffer?: number;
    };
};
//# sourceMappingURL=pandoc.d.ts.map