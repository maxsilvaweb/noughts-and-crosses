import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: [tailwindcss],
    rules: {
      'import/prefer-default-export': 'off',
      'no-console': 'warn',
      'no-var': 'error',
      'import/no-anonymous-default-export': 'off',
    },
    ignorePatterns: ['.next', 'dist', 'node_modules', 'next.config.js'],
  },
];

export default eslintConfig;
