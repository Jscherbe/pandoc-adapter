/**
 * A module providing a function to execute the Pandoc document converter.
 * @module pandoc
 */

import { execFile } from "child_process";
import createLogger from "@ulu/node-logger";
import stream from "stream";
import which from "which";

const logger = createLogger("Pandoc Adapter");
const getPath = which("pandoc").catch(err => {
  logger.error("Error getting pandoc bin path", err);
});
const errorPassedMsg = "The results from the pandoc binary are being passed through as is (may be malformed, incomplete, non-existent)";

/**
 * @typedef {object} PandocAdapterOptions
 * @property {boolean} [allowError=false] - If true, resolves the promise with the stdout even on Pandoc process error.
 * @property {boolean} [allowStdoutError=false] - If true, resolves with the stdout even if Pandoc writes to stderr.
 * @property {object} [execFile] - Options passed directly to the `child_process.execFile` function.
 * @property {number} [execFile.maxBuffer=5242880] - The maximum amount of data (in bytes) allowed on stdout or stderr.
 */

/**
 * Default configuration for the pandoc function.
 * @type {PandocAdapterOptions}
 */
const defaults = {
  allowError: false,
  allowStdoutError: false,
  execFile: {
    maxBuffer: 1024 * 5000 // (5000 MB)
  }
};

/**
 * Executes the Pandoc binary to convert documents. 
 *
 * @async
 * @param {object} config - Configuration object for the pandoc execution.
 * @param {string|stream.Readable} [config.input=""] - The input content to be processed by Pandoc. This can be a string which will be piped to Pandoc's stdin. If arguments to Pandoc specify an input file or URL, this can be an empty string.
 * @param {string[]} [config.args=[]] - An array of command-line arguments to pass to the Pandoc binary (e.g., `['-f', 'markdown', '-t', 'html', 'input.md', '-o', 'output.html']`).
 * @param {PandocAdapterOptions} [config.options={}] - Additional options to pass which will be merged with the module's defaults.
 * @returns {Promise<string>} A Promise that resolves with the stdout from the Pandoc binary.
 * @throws {Error|string} Rejects with an error if the Pandoc binary fails and `allowErrors` or `allowStdoutError` are false.
 */
export async function pandoc(config) {
  // Note we make input empty string incase user is loading from URL arg
  const { input = "", args = [], options } = config;
  const opts = Object.assign({}, defaults, options);
  return new Promise((resolve, reject) => {
    getPath.then(binPath => {
      // Run pandoc binary
      const cmd = execFile(binPath, args, opts.execFile, (err, stdout, stderr) => {
        if (err) {
          logger.error("Error using pandoc binary\n", err);
          if (opts.allowErrors) {
            logger.warn("'allowErrors' enabled.", errorPassedMsg);
            resolve(stdout);
          } else {
            reject(err);
          }
          return;
        }
        if (stderr) {
          logger.error("Error from pandoc binary\n", stderr);
          if (opts.allowStdoutError) {
            logger.warn("'allowStdoutError' enabled.", errorPassedMsg);
            resolve(stdout);
          } else {
            reject(stderr);
          }
          return;
        }
        resolve(stdout);
      });
      // Use a stream to pass file contents to pandoc bin
      const readable = new stream.Readable();
      readable.push(input);
      readable.push(null);   // End Stream
      readable.pipe(cmd.stdin);
    });
  });
}