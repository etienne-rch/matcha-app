const tseslint = require("@typescript-eslint/eslint-plugin");
const parser = require("@typescript-eslint/parser");
const importPlugin = require("eslint-plugin-import");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = [
  {
    ignores: ["dist", "node_modules", "build"],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "no-console": "warn",
      "react-native/no-inline-styles": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
          ],
        },
      ],
    },
  },
];
