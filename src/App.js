import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08A858",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.1rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h6 : {
      fontWeight: 500
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
