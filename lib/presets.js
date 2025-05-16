export default {
  docxToMarkdownPandoc: [ 
    "--from=docx", 
    "--to=markdown+grid_tables-bracketed_spans-native_spans", 
    "--reference-location=block",
    "--columns=110",
  ],
  docxToMarkdown: [
    "--from=docx", 
    "--to=markdown+pipe_tables-bracketed_spans-native_spans"
  ],
  docxToHtml: [
    "--from=docx", 
    "--to=html",
  ],
  docxToIcml: [
    "--from=docx", 
    "--to=icml",
    "--standalone"
  ]
};