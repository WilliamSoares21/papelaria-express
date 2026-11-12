import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["coverage/"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
        cy: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-console": "warn"
    },
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        cy: "readonly",
      },
    },
  },
];
