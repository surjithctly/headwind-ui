const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
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
      sans: ["Graphik", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        indigo: colors.indigo,
        truegray: colors.gray,
      },
    },
  },
  variants: { colors: ["hover"] },
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
  plugins: [],
};
