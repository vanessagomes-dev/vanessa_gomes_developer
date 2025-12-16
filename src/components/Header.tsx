import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../components/GradientText";

// 1. Definição da Interface de Props
interface HeaderProps {
  toggleTheme: () => void;
  themeMode: "light" | "dark";
}

// 2. Componente de Estilização Principal
const HeaderContainer = styled(motion.create("header"))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.textSecondary}10; 
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

// 3. Estilos da Logo/Marca
const LogoContainer = styled(motion.create(Link))`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  text-decoration: none; 

  svg {
    margin-right: 0.5rem;
  }
`;

// 4. Estilos do Menu de Navegação (Desktop)
const NavMenu = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* Menu lateral para mobile */
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => props.theme.colors.surface};
    border-top: 1px solid ${(props) => props.theme.colors.textSecondary}20;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
    transition: all 0.3s ease-in-out;
    padding: 1rem 0;
  }
`;

// 5. Estilos dos Links de Navegação
const NavLink = styled(Link)`
  padding: 0.6rem 1.2rem;
  margin: 0 0.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px; 
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: translateY(-3px);
    /* Adicionando o sombreado leve solicitado */
    background-color: ${(props) => props.theme.colors.surface};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.8rem 0;
    width: 90%;
    text-align: center;
    border-bottom: 1px dashed ${(props) => props.theme.colors.textSecondary}10;

    &:hover {
      transform: none; 
    }
  }
`;

// 6. Botão do Menu Hambúrguer (Apenas em Mobile)
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
  }
`;

// 7. Botão do Toggle de Tema
const ThemeToggle = styled.button`
  background: ${(props) =>
    props.theme.colors.primary}15;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  padding: 0.6rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.theme.colors.primary}30;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0;
    padding: 0.8rem;
  }
`;

const Header: React.FC<HeaderProps> = ({ toggleTheme, themeMode }) => {
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu após clicar em um link (útil no mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* --- LOGO COM ANIMAÇÃO --- */}
      <LogoContainer>
        <GradientText
          colors={["#8a2be2", "#4079ff", "#40dcff87", "#8a2be2", "#4079ff"]}
          animationSpeed={3}
        >
          {"</> Vanessa.dev"}
        </GradientText>
      </LogoContainer>

      {/* Botão Hambúrguer (Mobile) */}
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      {/* Menu de Navegação */}
      <NavMenu $isOpen={isOpen}>
        <NavLink to="/" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/sobre" onClick={handleLinkClick}>
          Sobre
        </NavLink>
        <NavLink to="/projetos" onClick={handleLinkClick}>
          Projetos
        </NavLink>
        <NavLink to="/skills" onClick={handleLinkClick}>
          Skills
        </NavLink>
        <NavLink to="/contato" onClick={handleLinkClick}>
          Contato
        </NavLink>

        {/* Alternador de Tema */}
        <ThemeToggle onClick={toggleTheme}>
          {themeMode === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </ThemeToggle>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
