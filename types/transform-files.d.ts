/**
 * Transforms files from DOCX to HTML and Markdown using Pandoc.
 * @async
 * @param {TransformFilesOptions} userOptions - User-provided options to override the defaults.
 * @returns {Promise<void>} A Promise that resolves when the transformation is complete.
 */
export function transformFiles(userOptions?: TransformFilesOptions): Promise<void>;
/**
 * Default options for the transformFiles function.
 * @typedef {object} TransformFilesOptions
 * @property {string} inputDir - The directory containing the input files.
 * @property {string} outputDir - The directory where the output files will be written.
 * @property {string} assetDir - The directory where extracted media (images, etc.) will be written.
 * @property {string} assetPublicPath - The final asset path (images/etc paths are modified to point at this absolute path, like the base path in site it will be used in).
 * @property {string} pattern - The glob pattern used to select input files.
 * @property {boolean} emptyOutputDir - Empty (delete contents) of output directory before populating
 * @property {boolean} emptyAssetDir - Empty (delete contents) of asset directory before populating
 * @property {boolean} updateAssetUrls - Whether you want the asset paths (absolute based on assetDir) to be updated to assetPublicPath (relative as though in a website/etc)
 * @property {import("./pandoc").PandocAdapterOptions} adapterOptions - Options to pass to the pandoc adapter.
 * @property {boolean} adapterOptions.allowError - Allow errors from pandoc.
 * @property {boolean} adapterOptions.allowStdoutError - Allow errors from pandoc stdout.
 * @property {object} adapterOptions.execFile - Options for the child_process.execFile.
 * @property {number} adapterOptions.execFile.maxBuffer - Maximum buffer size.
 * @property {function} getFileOutputPath - Function to determine the output file path.
 * @property {function} getFileOutputDir - Function to determine the output directory.
 * @property {function} getFileAssetDir - Function to determine the asset extraction directory.
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
    inputDir: string;
    /**
     * - The directory where the output files will be written.
     */
    outputDir: string;
    /**
     * - The directory where extracted media (images, etc.) will be written.
     */
    assetDir: string;
    /**
     * - The final asset path (images/etc paths are modified to point at this absolute path, like the base path in site it will be used in).
     */
    assetPublicPath: string;
    /**
     * - The glob pattern used to select input files.
     */
    pattern: string;
    /**
     * - Empty (delete contents) of output directory before populating
     */
    emptyOutputDir: boolean;
    /**
     * - Empty (delete contents) of asset directory before populating
     */
    emptyAssetDir: boolean;
    /**
     * - Whether you want the asset paths (absolute based on assetDir) to be updated to assetPublicPath (relative as though in a website/etc)
     */
    updateAssetUrls: boolean;
    /**
     * - Options to pass to the pandoc adapter.
     */
    adapterOptions: import("./pandoc").PandocAdapterOptions;
    /**
     * - Allow errors from pandoc.
     */
    allowError: boolean;
    /**
     * - Allow errors from pandoc stdout.
     */
    allowStdoutError: boolean;
    /**
     * - Options for the child_process.execFile.
     */
    execFile: {
        maxBuffer: number;
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
     * - Function to determine the asset extraction directory.
     */
    getFileAssetDir: Function;
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
//# sourceMappingURL=transform-files.d.ts.map