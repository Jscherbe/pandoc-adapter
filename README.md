# @ulu/pandoc-adapter

A Node.js package that provides utilities for converting documents using Pandoc, with a focus on processing multiple files and managing extracted assets with transformFiles.

**Important:** This package acts as a wrapper around the Pandoc command-line tool. Therefore, **you must have the Pandoc binary installed and accessible in your system's PATH** for this package to function correctly. This package itself does not install Pandoc.

- [Installation](#installation)
- [Primary Functions](#primary-functions)
  - [`pandoc(config)`](#pandocconfig)
  - [`transformFiles(userOptions)`](#transformfilesuseroptions)
  - [`transformFilesDefaults`](#transformfilesdefaults)
- [Exported Utilities (`utils`)](#exported-utilities-utils)
- [Exported Presets (`presets`)](#exported-presets-presets)
- [Full API Documentation](#full-api-documentation)
- [Change Log](#change-log)


## Installation

```bash
npm install @ulu/pandoc-adapter
```

## Primary Functions

### `pandoc(config)`

Executes the Pandoc binary for document conversion.

```js
import { pandoc } from '@ulu/pandoc-adapter';
import fs from 'fs';
import path from 'path';

async function convertDocxToHtml(inputFilePath, outputPath) {
  try {
    const inputFileContent = fs.readFileSync(inputFilePath);
    const html = await pandoc({
      input: inputFileContent,
      args: ['--from=docx', '--to=html', '-o', outputPath]
    });
    console.log('Successfully converted to HTML:', outputPath);
  } catch (error) {
    console.error('Pandoc conversion failed:', error);
  }
}

// Example usage:
const inputFilePath = 'path/to/your/input.docx'; // Replace with actual path
const outputFilePath = 'output.html';
// convertDocxToHtml(inputFilePath, outputFilePath);
```

**`config` Object Properties:**

  - `input` (string, optional): The input content to be processed by Pandoc. This can be a string which will be piped to Pandoc's stdin. If arguments to Pandoc specify an input file or URL, this can be an empty string.
  - `args` (string[], optional): An array of command-line arguments to pass to the Pandoc binary (e.g., `['-f', 'markdown', '-t', 'html', 'input.md', '-o', 'output.html']`).
  - `options` (object, optional): Additional options.
      - `allowError` (boolean, optional): If `true`, resolves with stdout even on Pandoc error. Defaults to `false`.
      - `allowStdoutError` (boolean, optional): If `true`, resolves with stdout even if Pandoc writes to stderr. Defaults to `false`.
      - `execFile` (object, optional): Options passed directly to the `child_process.execFile` function.
          - `maxBuffer` (number, optional): The maximum amount of data (in bytes) allowed on stdout or stderr. Defaults to `5242880` (5MB).

**Returns:** A `Promise` that resolves with the stdout from the Pandoc binary.

### `transformFiles(userOptions)`

Transforms multiple files based on a glob pattern, converting them to both HTML and Markdown. It handles output directory creation, asset extraction, and optional URL updating. 

When `updateAssetUrls` is enabled, it will replace the extracted asset path (`assetDir`) out of the images/etc and replacing it with `assetPublicPath` so that it can be used in a website. This `assetPublicPath` would be a root-relative path like "/assets/extracted" so that anywhere an image is used (ie. "/tools.html" vs /some/other/page.html") it would work (not relative to page). 

```js
import path from "path";
import { getUrlDirname } from "@ulu/utils/node/path.js";
import { transformFiles } from "@ulu/pandoc-adapter";

const __dirname = getUrlDirname(import.meta.url);

const options = {
  pattern: '*.docx',
  inputDir: path.resolve(__dirname, "docx/"),
  outputDir: path.resolve(__dirname, "dist/markup/"),
  assetDir: path.resolve(__dirname, "dist/assets/"),
};

(async () => {
  try {
    await transformFiles(options);
    console.log('Successfully processed files!');
  } catch (error) {
    console.error('File transformation failed:', error);
  }
})();
```

**`userOptions` Object (extends `transformFilesDefaults`):**

  - `inputDir` (string, required): Absolute path to the input directory.
  - `outputDir` (string, required): Absolute path to the output directory.
  - `assetDir` (string, required): Absolute path to the directory for extracted assets.
  - `assetPublicPath` (string, optional): Public URL path for assets (used for updating URLs in output). Defaults to `"/assets/extracted"`.
  - `pattern` (string, optional): Glob pattern to select input files. Defaults to `"[!~]?*.docx"`.
  - `emptyOutputDir` (boolean, optional): If `true`, empties the output directory before processing. Defaults to `true`.
  - `emptyAssetDir` (boolean, optional): If `true`, empties the asset directory before processing. Defaults to `true`.
  - `updateAssetUrls` (boolean, optional): If `true`, updates asset paths in the output to `assetPublicPath`. Defaults to `true`.
  - `adapterOptions` (object, optional): Options passed to the underlying `pandoc` function.
      - `allowError` (boolean, optional): Allow errors from pandoc.
      - `allowStdoutError` (boolean, optional): Allow errors from pandoc stdout.
      - `execFile` (object, optional): Options passed directly to the `child_process.execFile` function.
          - `maxBuffer` (number, optional): Maximum buffer size.
  - `getFileOutputPath(ctx)` (function, optional): Function to determine the output file path.
  - `getFileOutputDir(ctx)` (function, optional): Function to determine the output directory for a file.
  - `getFileAssetDir(ctx)` (function, optional): Function to determine the asset extraction directory for a file.
  - `getHtmlArgs(ctx)` (function, optional): Function to generate Pandoc arguments for HTML conversion.
  - `getMarkdownArgs(ctx)` (function, optional): Function to generate Pandoc arguments for Markdown conversion.
  - `beforeWrite(markup, ctx)` (function, optional): Function to modify the output (HTML or Markdown) before writing to disk.

**Returns:** A `Promise` that resolves when all files are processed.

### `transformFilesDefaults`

An object containing the default options for the `transformFiles` function.

```javascript
import { transformFilesDefaults } from '@ulu/pandoc-adapter';
console.log(transformFilesDefaults);
```

## Exported Utilities (`utils`)

  - `htmlRemoveImageStyles(html)`: Removes style attributes from `<img>` tags in HTML.
  - `markdownRemoveImageDimensions(markdown)`: Removes width and height attributes from `<img>` tags in Markdown.
  - `cleanHtml(html)`: Removes image styles from HTML and then pretty-formats it.
  - `urlize(string)`: Converts a string to a URL-friendly slug.

## Exported Presets (`presets`)

An object containing predefined Pandoc argument arrays for common conversions.

```javascript
import { presets } from '@ulu/pandoc-adapter';
console.log(presets.docxToMarkdownPandoc);
// Output: [
//   '--from=docx',
//   '--to=markdown+grid_tables-bracketed_spans-native_spans',
//   '--reference-location=block',
//   '--columns=110'
// ]
```

Available presets:

  - `docxToMarkdownPandoc`
  - `docxToMarkdown`
  - `docxToHtml`
  - `docxToIcml`

## Full API Documentation

[API Documentation](https://jscherbe.github.io/pandoc-adapter/)

## Change Log

[Change Log](CHANGELOG.md)

