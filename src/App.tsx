import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LanguageProvider } from "./contexts/LanguageProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CustomTheme } from "./interfaces/CustomTheme";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState<CustomTheme>({ darkMode: false });

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          setTheme={() => setTheme((prev) => ({ darkMode: !prev.darkMode }))}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" />
          <Route path="/resume" />
          <Route path="/contacts" />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
