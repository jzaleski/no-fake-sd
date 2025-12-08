import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "eslint-config-next";

// XXX: Filter out any config that redefines @typescript-eslint plugin
const nextConfigs = Array.isArray(nextPlugin) ? nextPlugin : [nextPlugin];
const filteredNextConfigs = nextConfigs.map(config => {
  if (config.plugins && config.plugins["@typescript-eslint"]) {
    const { plugins, ...rest } = config;
    const { "@typescript-eslint": _, ...otherPlugins } = plugins;
    return { ...rest, plugins: otherPlugins };
  }
  return config;
});

const config = [
  {
    ignores: [".next/**", "node_modules/**", "*.tsbuildinfo", "next-env.d.ts", "eslint.config.mjs"],
  },
  js.configs.recommended,
  ...filteredNextConfigs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        BlobPart: "readonly",
        document: "readonly",
        google: "readonly",
        navigator: "readonly",
        NextFetchRequestConfig: "readonly",
        NodeJS: "readonly",
        React: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-restricted-syntax": ["error", "FunctionExpression", "FunctionDeclaration"],
      // Disable base rule as it can report incorrect errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Test files configuration
  {
    files: ["**/__tests__/**/*", "**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        jest: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },
];

export default config;
