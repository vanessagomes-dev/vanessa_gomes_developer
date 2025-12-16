import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    transition: background 0.3s ease, color 0.3s ease; 
    min-height: 100vh;
    position: relative;
  }

  /* --- MARCA D'ÁGUA DE CIRCUITO (BORDAS) --- */
  body::before, body::after {
    content: "";
    position: fixed; 
    width: 500px; 
    height: 600px; 
    background-image: url("/circuit-board.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.12; 
    pointer-events: none;

    /* Esconde em dispositivos móveis para não poluir o conteúdo */
    @media (max-width: 768px) {
      display: none; 
    }
  }

  /* Posiciona no Canto Superior Esquerdo */
  body::before {
    top: 0;
    left: 0;
    transform: rotate(0deg); 
  }

  /* Posiciona no Canto Inferior Direito */
  body::after {
    bottom: 0;
    right: 0; 
    transform: rotate(180deg); 
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif; 
    font-size: 16px;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }
    @media (max-width: 720px) {
      font-size: 87.5%; 
    }
  }
`;

export default GlobalStyles;