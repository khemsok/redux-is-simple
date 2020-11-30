import React, { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import WhatIsRedux from "./components/WhatIsRedux";
import ConceptsOfRedux from "./components/ConceptsOfRedux";
import Example from "./components/Example";
import Counter from "./components/Counter";
import ReduxThunk from "./components/ReduxThunk";
import Quote from "./components/Quote";
import End from "./components/End";

// MUI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Redux
import { useSelector } from "react-redux";

// util
import { darkMode, lightMode } from "./util/theme";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div>
      <ThemeProvider theme={createMuiTheme(theme === "light" ? lightMode : darkMode)}>
        <CssBaseline />
        <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
          <Header />
        </Container>
        <Container maxWidth="md">
          <WhatIsRedux />
          <ConceptsOfRedux />
          <Example />
          <Counter />
          <ReduxThunk />
          <Quote />
          <End />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
