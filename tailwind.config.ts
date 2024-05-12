import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
