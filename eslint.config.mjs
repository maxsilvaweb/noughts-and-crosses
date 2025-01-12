import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss"; // Import the plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Use FlatCompat to extend configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      tailwindcss, // Use the imported plugin
    },
    rules: {
      "import/prefer-default-export": "off",
      "no-console": "warn",
      "no-var": "error",
      "import/no-anonymous-default-export": "off",
    },
  },
];

// Add ignore patterns at the top level
eslintConfig.ignorePatterns = [".next", "dist", "node_modules", "next.config.js"];

// Export the configuration
export default eslintConfig;