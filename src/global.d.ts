// ARQUIVO: src/global.d.ts

// 1. CORREÇÃO para CSS (TS2307: Não foi possível encontrar o módulo '*.css')
// Isso permite que você importe arquivos CSS sem erro de tipagem.
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// 2. CORREÇÃO para ImportMeta.env (TS2339: A propriedade 'env' não existe)
// Isso define a estrutura de variáveis de ambiente do Vite.
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // O Vite detecta automaticamente o PROD (produção)
  readonly PROD: boolean;
  // Adicione outras variáveis de ambiente aqui se as usar (ex: VITE_MINHA_VARIAVEL: string)
}

// 3. CORREÇÃO para vite.config.ts (TS2307: Não é possível localizar o módulo 'vite')
// O Vite deve ser encontrado automaticamente, mas este é um erro comum de pnpm/VS Code.
// Incluir esta linha garante que o TS saiba que existe um ambiente Vite.
/// <reference types="vite/client" />