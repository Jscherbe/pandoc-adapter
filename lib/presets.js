/**
 * Configuration for Pandoc conversions. Defines presets for command-line arguments (args)
 * to use for different input/output formats.
 * @module presets
 */
export default {
  /**
   * Arguments for converting DOCX to Markdown with grid tables, bracketed spans,
   * and native spans.
   * @type {string[]}
   */
  docxToMarkdownPandoc: [ 
    "--from=docx", 
    "--to=markdown+grid_tables-bracketed_spans-native_spans", 
    "--reference-location=block",
    "--columns=110",
  ],
  /**
   * Arguments for converting DOCX to Markdown with pipe tables, bracketed spans,
   * and native spans.
   * @type {string[]}
   */
  docxToMarkdown: [
    "--from=docx", 
    "--to=markdown+pipe_tables-bracketed_spans-native_spans",
    "--reference-location=block",
    "--columns=110",
  ],
  /**
   * Arguments for converting DOCX to HTML.
   * @type {string[]}
   */
  docxToHtml: [
    "--from=docx", 
    "--to=html",
  ],
  /**
   * Arguments for converting DOCX to ICML (InCopy Markup Language) as a standalone document.
   * @type {string[]}
   */
  docxToIcml: [
    "--from=docx", 
    "--to=icml",
    "--standalone"
  ]
};