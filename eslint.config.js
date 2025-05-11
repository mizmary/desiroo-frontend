import js from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-plugin-prettier"
import importPlugin from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      import: importPlugin,
      prettier,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["off", { allowConstantExport: true }],
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"], ["internal"], ["sibling", "parent"], ["index"]],
          "newlines-between": "always"
        }
      ],
      "prettier/prettier": "error"
    }
  }
]
