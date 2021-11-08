import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Faq from "./pages/Faq";

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
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-condition">
            <TermsCondition />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
