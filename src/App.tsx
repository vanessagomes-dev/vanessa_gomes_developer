import { useState, useMemo } from 'react'; 
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'; 
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import styled from 'styled-components';

// -- COMPONENTES A SEREM CRIADOS --
// import Header from './components/Header';
// import Home from './pages/Home';

const TestContainer = styled.div`
  padding: 50px;
  text-align: center;

  button {
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        opacity: 0.8;
    }
  }
`;

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
    // 1. ThemeProvider fornece o objeto 'theme' para todos os Styled Components
    <ThemeProvider theme={theme}>
      {/* 2. GlobalStyles aplica as cores de fundo e texto no body */}
      <GlobalStyles />
      
      {/* 3. Roteamento e Layout */}
      <Router>
        {/* O Header receberá a função de toggle para o botão Sol/Lua */}
        {/* <Header toggleTheme={toggleTheme} themeMode={themeMode} /> */}
        
        {/* Conteúdo temporário com TestContainer */}
        <TestContainer>
          <h1>Portfólio Vanessa</h1>
          <p>Tema Atual: {themeMode.toUpperCase()}</p>
          <button onClick={toggleTheme}>
            Alternar Tema
          </button>
        </TestContainer>
        
        {/* <Home /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;