import createTheme from "@mui/material/styles/createTheme";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#22A5AD",
      secondary: "#2CA4AB",
    },
    white: {
      main: "#FFF",
    },
    black: {
      main: "#000",
    },
    gray: {
      main: "#666",
    },
    lightGray: {
      main: "#f4f5f6",
    },
  },
  typography: {
    fontFamily: [
      "Jost",
      "Roboto",
      "Amiri",
      "Mirza",
      "Lateef",
      "Scheherazade New",
      "Noto Naskh Arabic",
      "sans-serif",
      "serif",
    ].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#22A5AD",
      secondary: "#2CA4AB",
    },
    white: {
      main: "#000",
    },
    black: {
      main: "#fff",
    },
    gray: {
      main: "#666",
    },
    lightGray: {
      main: "#484848",
    },
  },
  typography: {
    fontFamily: [
      "Jost",
      "Roboto",
      "Amiri",
      "Mirza",
      "Lateef",
      "Scheherazade New",
      "Noto Naskh Arabic",
      "sans-serif",
      "serif",
    ].join(","),
  },
});
