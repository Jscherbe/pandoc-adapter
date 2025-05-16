import path from "path";
import { getUrlDirname } from "@ulu/utils/node/path.js";
import { transformFiles } from "../../index.js";

const __dirname = getUrlDirname(import.meta.url);

const options = {
  inputDir: path.resolve(__dirname, "docx/"),
  outputDir: path.resolve(__dirname, "dist/markup/"),
  assetDir: path.resolve(__dirname, "dist/assets/"),
};

console.log("::: Starting Test :::");

console.log("transformFiles > options:\n", options);

(async () => {
  console.log("::: Running transformFiles() :::");
  try {
    await transformFiles(options);
  } catch (error) {
    console.error(error);
  }
})();