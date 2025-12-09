// 1. Definição da Interface do Tema (Tipagem)
export interface Theme {
  colors: {
    primary: string;         // Cor principal (para botões, links, destaques)
    secondary: string;       // Cor secundária (para títulos, ícones)
    background: string;      // Fundo principal da página
    surface: string;         // Fundo de cards, containers, modais
    text: string;            // Cor do texto principal
    textSecondary: string;   // Cor do texto secundário (descrições)
  };
}

// 2. Tema Claro (Light Mode)
export const lightTheme: Theme = {
  colors: {
    primary: '#8a2be2',        // Ex: Roxo Suave para destaque
    secondary: '#2c3e50',      // Ex: Azul Marinho Escuro para títulos
    background: '#f8f8f8',     // Fundo: Off-White muito claro
    surface: '#ffffff',        // Superfície: Branco puro para cards
    text: '#333333',           // Texto: Preto suave
    textSecondary: '#6c757d',  // Texto Secundário: Cinza
  },
};

// 3. Tema Escuro (Dark Mode)
export const darkTheme: Theme = {
  colors: {
    primary: '#ff7f50',        // Ex: Coral/Dourado para destaque (Fica bem no Dark)
    secondary: '#f8f8f8',      // Ex: Branco/Off-White para títulos
    background: '#121212',     // Fundo: Preto/Azul Marinho muito escuro
    surface: '#1e1e1e',        // Superfície: Cinza Escuro para cards
    text: '#ffffff',           // Texto: Branco
    textSecondary: '#adb5bd',  // Texto Secundário: Cinza Claro
  },
};