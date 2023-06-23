import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { CustomTheme } from "./interfaces/CustomTheme";
import { Button } from "./components/ui/Button.styled";

function App() {
  const [theme, setTheme] = useState<CustomTheme>({ darkMode: false });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button
        onClick={() => setTheme((prev) => ({ darkMode: !prev.darkMode }))}
      >
        Styled Button!
      </Button>
    </ThemeProvider>
  );
}

export default App;
