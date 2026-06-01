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
    rules: {
      // Disabled: the rule generates an invalid regex when seo.ts files exist
      // inside route directories (e.g. [locale]/about/seo.ts), crashing the build.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
