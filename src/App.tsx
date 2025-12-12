import { useState, useMemo } from 'react'; 
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'; 
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import { Routes, Route } from 'react-router-dom';

// -- COMPONENTES 
import Header from './components/Header';

// -- PÁGINAS
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


function App() {
  // **********************************************
  // ** LÓGICA (HOOKS E FUNÇÕES) VEM AQUI **
  // **********************************************

  // 1. Estado para controlar o modo (light ou dark)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  // 2. Seleciona o objeto de tema correto baseado no estado
  const theme = useMemo(() => themeMode === 'light' ? lightTheme : darkTheme, [themeMode]);

  // 3. Função para alternar entre os temas
  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        {/* Renderiza o Header e passa as props de tema */}
        <Header toggleTheme={toggleTheme} themeMode={themeMode} /> 
        
        <main>
          <Routes>
            {/* Estas serão as rotas, criar as páginas*/}
            <Route path="/" element={<Home />} /> 
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contato" element={<Contact />} />

            {/* Rota de fallback para 404, se necessário */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

      </Router>
    </ThemeProvider>
  );
}

export default App;