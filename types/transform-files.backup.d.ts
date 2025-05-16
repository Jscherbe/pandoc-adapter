/**
 * Transforms files from DOCX to HTML and Markdown using Pandoc.
 * @async
 * @param {Options} userOptions - User-provided options to override the defaults.
 * @returns {Promise<void>} A Promise that resolves when the transformation is complete.
 */
export function transformFiles(userOptions: Options): Promise<void>;
/**
 * Default options for the transformFiles function.
 * @typedef {object} TransformFilesOptions
 * @property {string | null} inputDir - The directory containing the input files.
 * @property {string | null} outputDir - The directory where the output files will be written.
 * @property {string | null} extractDir - The directory where extracted media (images, etc.) will be written.
 * @property {string | null} staticRelDir - The relative path for static assets.
 * @property {string | null} staticFinalDir - The final static asset path.
 * @property {string} pattern - The glob pattern used to select input files.
 * @property {object} adapterOptions - Options to pass to the pandoc adapter.
 * @property {boolean} adapterOptions.allowError - Allow errors from pandoc.
 * @property {boolean} adapterOptions.allowStdoutError - Allow errors from pandoc stdout.
 * @property {object} adapterOptions.execFile - Options for the child_process.execFile.
 * @property {number} adapterOptions.execFile.maxBuffer - Maximum buffer size.
 * @property {function} getFileOutputPath - Function to determine the output file path.
 * @property {function} getFileOutputDir - Function to determine the output directory.
 * @property {function} getFileExtractDir - Function to determine the media extraction directory.
 * @property {function} getExtractedRelDir - Function to determine the relative path for extracted media.
 * @property {function} getHtmlArgs - Function to generate Pandoc arguments for HTML conversion.
 * @property {function} getMarkdownArgs - Function to generate Pandoc arguments for Markdown conversion.
 * @property {function} beforeWrite - Function to modify the output before writing to disk.
 */
/**
 * Default configuration for the pandoc function.
 * @type {TransformFilesOptions}
 */
export const defaults: TransformFilesOptions;
/**
 * Default options for the transformFiles function.
 */
export type TransformFilesOptions = {
    /**
     * - The directory containing the input files.
     */
    inputDir: string | null;
    /**
     * - The directory where the output files will be written.
     */
    outputDir: string | null;
    /**
     * - The directory where extracted media (images, etc.) will be written.
     */
    extractDir: string | null;
    /**
     * - The relative path for static assets.
     */
    staticRelDir: string | null;
    /**
     * - The final static asset path.
     */
    staticFinalDir: string | null;
    /**
     * - The glob pattern used to select input files.
     */
    pattern: string;
    /**
     * - Options to pass to the pandoc adapter.
     */
    adapterOptions: {
        allowError: boolean;
        allowStdoutError: boolean;
        execFile: {
            maxBuffer: number;
        };
    };
    /**
     * - Function to determine the output file path.
     */
    getFileOutputPath: Function;
    /**
     * - Function to determine the output directory.
     */
    getFileOutputDir: Function;
    /**
     * - Function to determine the media extraction directory.
     */
    getFileExtractDir: Function;
    /**
     * - Function to determine the relative path for extracted media.
     */
    getExtractedRelDir: Function;
    /**
     * - Function to generate Pandoc arguments for HTML conversion.
     */
    getHtmlArgs: Function;
    /**
     * - Function to generate Pandoc arguments for Markdown conversion.
     */
    getMarkdownArgs: Function;
    /**
     * - Function to modify the output before writing to disk.
     */
    beforeWrite: Function;
};
//# sourceMappingURL=transform-files.backup.d.ts.map