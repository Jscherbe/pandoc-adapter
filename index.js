
/**
 * @module index
 * @description This module provides an interface for interacting with the Pandoc document converter,
 * including functions for direct execution and batch file transformations, along with utility functions
 * and predefined conversion presets.
 */

import { pandoc } from "./lib/pandoc.js";
import presets from "./lib/presets.js"; 
import { transformFiles, defaults as transformFilesDefaults } from "./lib/transform-files.js"; 
import * as utils from "./lib/utils.js";

export { pandoc, presets, transformFiles, transformFilesDefaults, utils };