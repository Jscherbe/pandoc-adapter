/* eslint-env node */
module.exports = {
  root: true,
  env: {
    "es2021": true,
    "shared-node-browser" : true
  },
  "extends": [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    // "@typescript-eslint/no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["lib/browser/*.js"],
      env: {
        browser: true
      }
    }
  ]
};

