import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

// ===============================================
// 1. ESTILIZAÇÃO DOS CONTAINERS GERAIS
// ===============================================

// Container Principal que define o layout da página
const AboutContainer = styled(motion.section)`
    min-height: 100vh;
    box-sizing: border-box;
    padding: 4rem 6rem;
    
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Alinha o conteúdo ao topo */
    
    border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
    border-radius: 8px;
    margin: 2rem 0.5rem; /* Mantemos as margens ajustadas da Home */

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2rem 1rem;
        margin: 1rem 1rem;
        align-items: center;
    }
`;

// Coluna de Texto Principal (Biografia e Habilidades)
const TextSection = styled.div`
    max-width: 65%;
    text-align: left;
    
    @media (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 2rem;
        text-align: center;
    }
`;

// Coluna Lateral (Poderia ser foto ou resumo de estatísticas)
const SidebarSection = styled.div`
    max-width: 30%;
    margin-left: 2rem;
    
    @media (max-width: 1024px) {
        max-width: 100%;
        margin-left: 0;
    }
`;

// Estilização do Título da Seção
const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

// Estilização do Parágrafo de Biografia
const BioText = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 1.5rem;
`;

// ===============================================
// 2. ESTILIZAÇÃO DOS ÍCONES SOCIAIS (CORRIGIDO)
// ===============================================

const SocialButtonsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        margin-top: 1rem;
    }
`;

const SocialLink = styled(motion.a)`
    /* Estilo base do link */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    /* Efeito de Zoom Suave no Hover (usando scale) */
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    svg {
        margin-right: 0.75rem;
        font-size: 1.5rem;
    }
`; // <--- FECHAMENTO CORRETO DO TEMPLATE LITERAL DO SocialLink

// Estilo para o botão LinkedIn
const LinkedInButton = styled(SocialLink)`
    background-color: #0A66C2; 
    color: white;
    
    /* Usando a cor primária no hover, se quiser um toque da sua paleta */
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;

// Estilo para o botão GitHub
const GitHubButton = styled(SocialLink)`
    background-color: #21262d; 
    color: white;
    border: 1px solid #c9d1d9; 
    
    /* Usando a cor secundária no hover, se quiser um toque da sua paleta */
    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.background};
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
            <TextSection>
                <Title>Sobre Mim</Title>
                
                <BioText>
                    Minha jornada como desenvolvedora começou em [Ano], e desde então me especializei em criar interfaces de usuário dinâmicas e robustas. Sou apaixonada por [mencione uma paixão de código, ex: arquitetura limpa, performance ou acessibilidade].
                </BioText>
                
                <BioText>
                    Como desenvolvedora Full Stack, possuo experiência sólida em **{/* front-end */}** (React, TypeScript, Redux) e **{/* back-end */}** (Node.js, Express, PHP). Meu foco principal é transformar desafios complexos em soluções de código elegantes e eficientes.
                </BioText>

                {/* Futuro componente de Skills/Tecnologias virá aqui */}
            </TextSection>
            
            <SidebarSection>
                {/* BOTÕES SOCIAIS */}
                <SocialButtonsContainer
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <LinkedInButton 
                        href="https://linkedin.com/in/SEU_PERFIL" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedinIn /> LinkedIn
                    </LinkedInButton>
                    
                    <GitHubButton 
                        href="https://github.com/SEU_PERFIL" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub /> GitHub
                    </GitHubButton>
                </SocialButtonsContainer>
                
                {/* Outros conteúdos da Sidebar virão aqui, se houver */}
            </SidebarSection>
        </AboutContainer>
    );
};

export default About;