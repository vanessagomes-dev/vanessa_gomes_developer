import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si"; 
import { TbLetterV } from "react-icons/tb"; 
import { GoCode } from "react-icons/go"; 

// Estilização da Seção Principal (Hero Section)
const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left; /* Alinhamento do texto geral */
  padding: 4rem 6rem; /* Mais padding nas laterais */
  position: relative;
  overflow: hidden;

  border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
  border-radius: 8px;
  margin: 1rem 3rem;

  @media (max-width: 1024px) {
    flex-direction: column; /* Coloca um item embaixo do outro em tablets */
    padding: 2rem 1rem;
    margin: 1rem 1rem;
    text-align: center;
  }
`;

// TextContainer - titulo e subtítulo
const TextContainer = styled(motion.div)`
  text-align: left;
  max-width: 450px;
  z-index: 10;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

// Estilização para  Foto
const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0;
  z-index: 1;
  /* NOVO: Container para os ícones orbitando a foto */
  position: relative;
  display: flex; /* Para centralizar a imagem dentro deste container */
  justify-content: center;
  align-items: center;

  /* Estilo para a imagem que está DENTRO deste container */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Estilização do Título e Subtítulo (ajustado para o novo posicionamento)
const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 0; /* Não precisa de margem inferior aqui, pois a TextContainer já tem */

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

// Estilização dos Botões de Ação (permanece igual, mas encapsulado)
const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  z-index: 1; /* Para os botões ficarem acima dos ícones */

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
  color: ${(props) =>
    props.theme.colors.background}; /* Ajustado para fundo claro */
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

// NOVO ESTILO: Container que GIRA (Orbiter)
const Orbiter = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o container na FOTO */
  width: 500px; /* Diâmetro da órbita (um pouco maior que a foto de 350px) */
  height: 500px;
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;

  /* Anel de Brilho Suave (Mantenha se quiser o efeito sutil) */
  box-shadow: 0 0 100px 30px rgba(138, 43, 226, 0.15);
`;

// NOVO ESTILO: Ícones Individuais (Cores Vivas e Tamanho maior)
const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3.5rem; /* Ícones maiores */
  background: ${(props) =>
    props.theme.colors.surface}; /* Fundo claro para o ícone */
  padding: 0.5rem;
  border-radius: 50%; /* Mantém o formato circular para os ícones */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  z-index: 10;
`;

// Lógica de Animação (Colocada dentro do arquivo Home.tsx)
const orbiterVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 60, // 60s para rotação bem lenta
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};
const Home: React.FC = () => {
  const counterRotate = {
    rotate: -360,
    transition: orbiterVariants.animate.transition,
  };

  return (
    <HeroSection>
      {/* 1. TEXTO (à esquerda) */}
      <TextContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Title>Olá, eu sou **Vanessa**</Title>
        <Subtitle>
          Desenvolvedora Web | React, Node & TypeScript Specialist
        </Subtitle>
        {/* Botões movidos para o final para manter a ordem Flexbox no mobile */}
      </TextContainer>

      {/* 2. FOTO E BOTÕES (à direita) */}
      <motion.div /* Container para agrupar foto e botões à direita */
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ProfileImage>
          {/*  foto, colocada na pasta public/vanessa-capa.png */}
          <img src="/vanessa-capa.png" alt="foto vanessa" />
          {/* NOVO: ORBITER DOS ÍCONES (ANEL DE ROTAÇÃO) */}
          <Orbiter variants={orbiterVariants} animate="animate">
            {/* Ícone 1: React (Top-Left) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                top: "5%",
                left: "15%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaReact color="#61DAFB" />
            </FloatingIcon>

            {/* Ícone 2: JavaScript (Top-Right) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                top: "15%",
                right: "5%",
                transform: "translate(50%, -50%)",
              }}
            >
              <FaJs color="#F7DF1E" />
            </FloatingIcon>

            {/* Ícone 3: Next.js (Right-Middle) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                top: "45%",
                right: "0%",
                transform: "translate(50%, -50%)",
              }}
            >
              <SiNextdotjs color="#000000" />
            </FloatingIcon>

            {/* Ícone 4: Node.js (Bottom-Right) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                bottom: "10%",
                right: "20%",
                transform: "translate(50%, 50%)",
              }}
            >
              <FaNodeJs color="#68A063" />
            </FloatingIcon>

            {/* Ícone 5: TypeScript (Bottom-Left) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                bottom: "5%",
                left: "20%",
                transform: "translate(-50%, 50%)",
              }}
            >
              <SiTypescript color="#007ACC" />
            </FloatingIcon>

            {/* Ícone 6: Código </> (Left-Middle) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                top: "55%",
                left: "0%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <GoCode color="#A55EEA" />
            </FloatingIcon>

            {/* Ícone 7: Vite (Diagonal) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                top: "25%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <TbLetterV color="#646CFF" />
            </FloatingIcon>

            {/* Ícone 8: HTML5 (Diagonal) */}
            <FloatingIcon
              animate={counterRotate}
              style={{
                bottom: "30%",
                right: "35%",
                transform: "translate(50%, 50%)",
              }}
            >
              <FaHtml5 color="#E34F26" />
            </FloatingIcon>
          </Orbiter>
        </ProfileImage>

        <CTAButtons>
          <ContactButton
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </ContactButton>
          <CVButton
            href="/assets/curriculo_vanessa.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </CVButton>
        </CTAButtons>
      </motion.div>
    </HeroSection>
  );
};

export default Home;
