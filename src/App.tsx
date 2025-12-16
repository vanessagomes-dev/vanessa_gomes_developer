import { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import { Routes, Route } from "react-router-dom";

// -- COMPONENTES
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// -- PÁGINAS
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BackToTop />

        <Header toggleTheme={toggleTheme} themeMode={themeMode} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
