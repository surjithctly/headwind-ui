const defaultTheme = require("tailwindcss/defaultTheme");
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
      gridTemplateColumns: {
        fr: "260px 1fr",
      },
    },
  },
  variants: { colors: ["hover"] },
  plugins: [require("@tailwindcss/forms")],
};
