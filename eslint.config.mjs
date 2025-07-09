import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { rules: {
    "indent": [
      "error",
      2,
      {
        "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
      }
    ],
    "key-spacing": [ "error", { "align": "value" } ],
    "max-len":     [
      "error",
      {
        "code":           120,
        "tabWidth":       2,
        "ignoreComments": true,
        "ignoreUrls":     true,
        "ignorePattern":  "^.*= require\\( '.*' \\);?"
      }
    ],
    "no-multiple-empty-lines":         [ "error", { "max": 2 } ],
    "no-console":                      "error",
    "no-debugger":                     "error",
    "space-before-blocks":             [ "error", "never" ],
    "space-before-function-paren":     [ "error", "never" ],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": [ "const", "let" ], "next": "*" },
      {
        "blankLine": "any",
        "prev":      [ "const", "let" ],
        "next":      [ "if", "const", "let" ]
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "overrides": {
          "if":     { "after": false },
          "while":  { "after": false },
          "switch": { "after": false },
          "try":    { "after": false },
          "catch":  { "after": false }
        }
      }
    ],
    "no-trailing-spaces":        [ "error", { "skipBlankLines": false } ],
    "array-bracket-spacing":     [ "error", "always" ],
    "computed-property-spacing": [ "error", "always" ]
  }}
]);
