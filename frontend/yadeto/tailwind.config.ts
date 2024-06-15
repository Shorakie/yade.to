import type { Config } from "tailwindcss";
import { join } from "path";

const config: Config = {
  content: [
    join(
      __dirname,
      "{pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,mdx}"
    ),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
