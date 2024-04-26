// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "preto-05": "#f5f5f5",
        "preto-branco": "#fff",
        "preto-100": "#464646",
        "azul-10": "#eaf2fd",
        "azul-100": "#2a7ae4",
        "dodgerblue": {
          "100": "#4594fc",
          "200": "rgba(69, 148, 252, 0.09)",
        },
        "darkgray": "#a2a2a2",
        "silver": "#c8c8c8",
      },
      spacing: {},
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        "duru-sans": ['Duru Sans', 'sans-serif'],
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "16px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "3xl": "22px",
      lg: "18px",
      "33xl": "52px",
      "23xl": "42px",
      "12xl": "31px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mqScreen: {
        raw: "screen and (min-width: 750px)",
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
};
