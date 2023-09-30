import { extendTheme, theme } from "@chakra-ui/react";

const fonts = {
  heading: `'Roobert', sans-serif`,
  body: `'Roobert', sans-serif`,
};
const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const ethAbj_theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    ...theme.colors,
    primary: "red",
    secondary: "",
    highlight: "",
    warning: "#e8a849",
    danger: "red",
    dark: "#000000",
    light: "#FFFFFF",
    grey: "#F6F6F6",
    darkGrey: "#737373",
    placeholderColor: "#999999",
  },
  breakpoints,
  fonts,
});

export default ethAbj_theme;
