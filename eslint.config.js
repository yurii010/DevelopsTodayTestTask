import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
    [
        globalIgnores(["dist"]),
        {
            files: ["**/*.{ts,tsx}"],
            plugins: {
                react,
                prettier,
            },
            extends: [
                js.configs.recommended,
                tseslint.configs.recommended,
                reactHooks.configs["recommended-latest"],
                reactRefresh.configs.vite,
            ],
            languageOptions: {
                ecmaVersion: 2020,
                globals: globals.browser,
            },
        },
    ],
    storybook.configs["flat/recommended"]
);
