import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiCode, FiBriefcase } from "react-icons/fi";

// ===============================================
// 1. ESTILIZAÇÃO GERAL E ANIMAÇÃO NEON
// ===============================================

const neonPulse = keyframes`
    0%, 100% {
        /* Brilho suave */
        box-shadow: 0 0 5px #C3A6E3, 
                    0 0 10px #C3A6E3;
    }
    50% {
        /* Brilho forte */
        box-shadow: 0 0 15px #7E57C2, 
                    0 0 25px #7E57C2; 
    }
`;
const AboutContainer = styled(motion.section)`
  min-height: 80vh;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
  border-radius: 8px;
  margin: 2rem 2rem;

  @media (max-width: 1024px) {
    padding: 2rem 1.5rem;
    margin: 1rem 1rem;
  }
`;

// Container do Topo (Introdução + Foto)
const TopSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 3rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.div`
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
    order: 2;
  }
`;

const PhotoWrapper = styled.div`
  max-width: 35%;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
    order: 1;
  }
`;

// Estilização da Foto
const StyledPhotoFrame = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  /* Borda e Animação Neon */
  border: 5px solid ${(props) => props.theme.colors.primary}90;
  animation: ${neonPulse} 2s infinite alternate ease-in-out;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 2rem;
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

// NOVO: Estilização dos Cards
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 2rem 0 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HighlightCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.textSecondary}20;
  height: 100%;

  h3 {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0.5rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Divider = styled.div`
  width: 50%; /* Linha mais curta, centralizada */
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${(props) => props.theme.colors.primary},
    transparent
  );
  margin: 2.5rem auto 1.5rem auto;
  opacity: 0.6;
`;

// Estilos dos Botões Finais
const FinalCTAWrappers = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os botões */
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column; /* Empilha no mobile */
    gap: 1rem;
  }
`;
const CTAButton = styled(motion.a)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  min-width: 180px;
`;
const PrimaryButton = styled(CTAButton)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}50;
  }
`;
// ===============================================
// 2. BOTÕES SOCIAIS
// ===============================================

// Botão base
const BaseSocialButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s ease;
  color: white;

  svg {
    margin-right: 0.6rem;
    font-size: 1.3rem;
  }
`;

const LinkedInColor = styled(BaseSocialButton)`
  background-color: #0a66c2;
  &:hover {
    background-color: #004182;
  }
`;

const GitHubColor = styled(BaseSocialButton)`
  background-color: ${(props) => props.theme.colors.textSecondary};
  color: ${(props) => props.theme.colors.background};
  &:hover {
    opacity: 0.9;
  }
`;

// ===============================================
// 3. COMPONENTE PRINCIPAL
// ===============================================

const About: React.FC = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Sobre Mim</Title>

      {/* === 1. TOPO: INTRODUÇÃO + FOTO === */}
      <TopSectionWrapper>
        {/* 1.1. INTRODUÇÃO (Apenas o texto curto) */}
        <TextSection>
          <BioText>
            Sou Vanessa Gomes, uma Desenvolvedora Web que une a visão
            estratégica do empreendedorismo com o rigor e a precisão do
            desenvolvimento de software.
          </BioText>
          <BioText>
            Minha jornada profissional é marcada pela curiosidade e admiração
            pelo poder do código em transformar ideias em soluções funcionais.
            Minha transição da área de eventos e empoderamento feminino me
            forneceu uma base sólida em{" "}
            <strong>
              comunicação, organização de projetos e foco no usuário
            </strong>
            .
          </BioText>
        </TextSection>

        {/* 1.2. FOTO NEON REDONDA */}
        <PhotoWrapper>
          <StyledPhotoFrame
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="/about-vanessa.jpeg" alt="Foto de Vanessa Gomes" />
          </StyledPhotoFrame>
        </PhotoWrapper>
      </TopSectionWrapper>

      {/* === 2. CENTRO: CARDS DE DESTAQUE === */}
      <CardsWrapper>
        {/* CARD 1: Evolução Técnica */}
        <HighlightCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>
            <FiCode /> Minha Evolução Técnica
          </h3>
          <BioText>
            Iniciei minha formação em Análise e Desenvolvimento de Sistemas
            (UNISA - 2024), complementada por diversos cursos e uma certificação
            em Desenvolvimento Python pela IBM.
          </BioText>
          <ul>
            <li>
              <strong>Frontend:</strong> Especialista em React e Next.js.
            </li>
            <li>
              <strong>Backend:</strong> Proficiência em Node.js, TypeScript,
              JavaScript, PHP (Laravel) e consultas SQL/NoSQL.
            </li>
            <li>
              <strong>Certificação:</strong> Python (IBM).
            </li>
          </ul>
        </HighlightCard>

        {/* CARD 2: Experiência Prática */}
        <HighlightCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3>
            <FiBriefcase /> Experiência Prática e Metodologia Ágil
          </h3>
          <BioText>
            Estágio de 6 meses na <strong>ART IT (2025)</strong>, vivenciando o
            ciclo completo de desenvolvimento em um ambiente ágil.
          </BioText>
          <ul>
            <li>
              <strong>Tecnologias:</strong> PHP Laravel, React, Next.js.
            </li>
            <li>
              <strong>Metodologias:</strong> Scrum/Kanban e testes manuais com
              TestLink.
            </li>
            <li>
              <strong>DevOps/Ferramentas:</strong> Docker, Git/GitLab, Jenkins
              (CI/CD, deploys e PRs).
            </li>
          </ul>
        </HighlightCard>
      </CardsWrapper>

      {/* === 3. RODAPÉ: CONCLUSÃO E BOTÕES === */}
      <TextSection style={{ maxWidth: "800px", textAlign: "center" }}>
        <BioText
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "var(--color-primary)",
          }}
        >
          Busco desafios onde possa combinar minha mentalidade de resolução de
          problemas com a excelência técnica para construir produtos escaláveis
          e de alto impacto.
        </BioText>
      </TextSection>

      <Divider />
      {/* NOVO BLOCO: TRÊS BOTÕES LADO A LADO */}
      <FinalCTAWrappers>
        {/* 1. Botão LinkedIn (Cor azul padrão) */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <LinkedInColor
            href="https://linkedin.com/in/vanessagomesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn /> LinkedIn
          </LinkedInColor>
        </motion.div>

        {/* 2. Botão GitHub (Cor cinza/secundária padrão) */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <GitHubColor
            href="https://github.com/vanessagomes-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </GitHubColor>
        </motion.div>

        {/* 3. Botão Download CV (Cor primária/destaque) */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <PrimaryButton href="/assets/cv-vanessa.pdf" download>
            Download CV
          </PrimaryButton>
        </motion.div>
      </FinalCTAWrappers>
    </AboutContainer>
  );
};

export default About;
