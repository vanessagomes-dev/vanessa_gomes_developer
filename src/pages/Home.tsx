import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText";
import { useNavigate } from "react-router-dom";

// ===============================================
// 1. ESTILIZAÇÃO DOS CONTAINERS PRINCIPAIS
// ===============================================

// Estilização da Seção Principal
const HeroSection = styled.section`
  min-height: calc(100vh - 150px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  text-align: left;

  padding: 4rem 2rem;
  padding-top: 1rem;
  margin: 2rem 2rem 2rem 2rem;

  position: relative;
  overflow: hidden;

  border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
  border-radius: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 1rem;
    margin: 1rem 1rem;
    text-align: center;
    align-items: center;
  }
  @media (min-width: 1600px) {
    padding: 6rem 4rem;
    margin: 4rem 4rem;
  }
`;

// CONTAINER: (Título/Subtítulo/Botões)
const MainTextWrapper = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: 5rem;

  display: flex;
  flex-direction: column;
  text-align: left;
  
  z-index: 10;

  @media (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 1600px) {
    top: 8rem;
    left: 8rem;
    max-width: 9000px;
  }
`;

// Wrapper para a Foto de Perfil 
const PhotoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  /* Posicionamento padrão para Desktop */
  position: absolute;
  right: 8rem;
  top: 3rem;

  @media (max-width: 1024px) {
    position: relative;
    right: auto;
    top: auto;
    margin-bottom: 2rem;
  }

  @media (min-width: 1600px) {
    right: 12rem;
    top: 6rem;
  }
`;

// Estilização para Foto
const ProfileImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0;
  margin-top: 0;
  z-index: 15;
  cursor: pointer;
  border: 5px solid ${(props) => props.theme.colors.primary};
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1600px) {
    width: 500px;
    height: 500px;
    border-width: 8px; 
  }
`;

// ===============================================
// 2. ESTILIZAÇÃO DO TEXTO E ANIMAÇÃO
// ===============================================

// Estilização do Título
const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;

  /* Estilo da primeira linha*/
  .title-line-1 {
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.textSecondary};
    line-height: 0.1;
  }

  /* Estilo da segunda linha */
  .title-line-2 {
    font-size: 5rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.primary};
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    .title-line-2 {
      font-size: 3.5rem;
      line-height: 1.5;
    }
  }

  @media (min-width: 1600px) {
    .title-line-1 {
      font-size: 2.2rem;
    }
    .title-line-2 {
      font-size: 6rem;
      line-height: 1.5;
    }
  }
`;

// Estilização do Subtítulo 
const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 0;

  /* Garante que o RotatingText fique ao lado */
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

// Styled Component para a Animação do RotatingText
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledRotatingText = styled(RotatingText).attrs((__props) => ({
  transition: { type: "spring", damping: 18, stiffness: 120 },
}))`
  /* Garante que ele fique ao lado do "Desenvolvedora Web" */
  display: inline-flex;
  margin-left: 0.5rem;

  .text-rotate-word {
    background-color: transparent !important;
  }

  .text-rotate-element {
    font-weight: 700 !important;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

// ===============================================
// 3. ESTILIZAÇÃO DOS BOTÕES
// ===============================================

// Estilização dos Botões de Ação
const CTAButtons = styled(motion.div)`
  display: flex;
  margin-top: 120px;
  gap: 20px;
  z-index: 1;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 80%;
    gap: 15px;
  }
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  min-width: 200px;
`;

const ContactButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  &:hover {
    box-shadow: 0 6px 15px ${(props) => props.theme.colors.primary}50;
    transform: translateY(-3px);
  }
`;

const CVButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary}10;
    transform: translateY(-3px);
  }
`;

// ===============================================
// 4. COMPONENTE PRINCIPAL HOME
// ===============================================

const Home: React.FC = () => {
  // Hook de Navegação
  const navigate = useNavigate();

  // Definir a função de clique
  const handlePhotoClick = () => {
    navigate("/sobre");
    };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    navigate("/contato");
  };

  // Lista de tecnologias para o RotatingText
  const rotatingSkills = [
    "React",
    "Node",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Python",
    "SQL",
    "NoSQL",
  ];

  return (
    <HeroSection>
      {/*  BLOCO DE TEXTO */}
      <MainTextWrapper
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Título */}
        <Title>
          <span className="title-line-1">Eu sou,</span>
          <span className="title-line-2">Vanessa Gomes</span>
        </Title>

        {/* Subtítulo com Animação Estilizada */}
        <Subtitle>
          Desenvolvedora Web
          <StyledRotatingText
            texts={rotatingSkills}
            splitLevelClassName="overflow-hidden"
            rotationInterval={2000}
          />
        </Subtitle>

        {/* Botões de Ação */}
        <CTAButtons>
          <ContactButton
            href="/contato"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </ContactButton>

          <CVButton
            href="/cv-vanessa.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </CVButton>
        </CTAButtons>
      </MainTextWrapper>

      <PhotoWrapper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ProfileImage whileHover={{ scale: 1.05 }} onClick={handlePhotoClick}>
          <img src="/perfil-vanessa.jpeg" alt="foto vanessa" />
        </ProfileImage>
      </PhotoWrapper>
    </HeroSection>
  );
};

export default Home;
