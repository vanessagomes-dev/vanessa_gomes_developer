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
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
`;

export default GlobalStyles;
