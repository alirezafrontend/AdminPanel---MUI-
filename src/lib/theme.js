import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ffffff" },
    secondary: { main: "#2a3447" },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2a3447" },
    secondary: { main: "#ffffff" },
    background: {
      default: "#2a3447",
      paper: "#2a3447",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
