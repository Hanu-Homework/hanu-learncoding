import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7579e7",
    },
    secondary: {
      main: "#B9FFFC",
    },
  },
  shape: {
    borderRadius: 50,
  },
  typography: {
    fontSize: 16,
  },
  /* whatever else you want to add here */
});
theme = responsiveFontSizes(theme, {});
export default theme;
