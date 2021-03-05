export const css = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
`;

export const configs = `const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        indigo: colors.indigo,
        truegray: colors.gray,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        cyan: colors.cyan,
        emerald: colors.emerald,
      },
    },
  },
  variants: { colors: ["hover"] },
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
  plugins: [require("@tailwindcss/forms")],
};

  `;
