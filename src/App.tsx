import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LanguageProvider } from "./contexts/LanguageProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CustomTheme } from "./interfaces/CustomTheme";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";

!localStorage.getItem("colorTheme") &&
  localStorage.setItem("colorTheme", JSON.stringify({ darkMode: false }));

function App() {
  const [theme, setTheme] = useState<CustomTheme>(
    JSON.parse(localStorage.getItem("colorTheme") || "") || { darkMode: false }
  );

  useEffect(() => {
    localStorage.setItem("colorTheme", JSON.stringify(theme));
  }, [theme]);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          setTheme={() => setTheme((prev) => ({ darkMode: !prev.darkMode }))}
        />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
