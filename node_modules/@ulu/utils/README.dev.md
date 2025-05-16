## Development Notes

- After adding any exports or modules make sure to generate types with "npm run types"
  - This uses typescript to crawl the JsDoc comments and generate declaration files
  - These are linked in the package (typesVersions)
  - I tried to find a way to get intellisense working without needing to run typscript but it's not possible. They are aware of the limitations (typescript, vscode repos have issues that discuss). So far for a module with submodules this seems to be the cleanest work around