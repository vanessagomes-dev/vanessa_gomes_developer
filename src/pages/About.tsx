import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

// ===============================================
// 1. ESTILIZAÇÃO DOS CONTAINERS
// ===============================================

const AboutContainer = styled(motion.section)`
    min-height: 80vh;
    padding: 4rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
    border-radius: 8px;
    margin: 2rem 0.5rem;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: 2rem 1.5rem;
        align-items: center;
    }
`;

const TextSection = styled.div`
    max-width: 60%;
    @media (max-width: 1024px) {
        max-width: 100%;
        text-align: center;
    }
`;

const SidebarSection = styled.div`
    max-width: 35%;
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 3rem;
    }
`;

// APENAS ESTILO: Sem o motion aqui para evitar erro de tipagem
const StyledPhotoFrame = styled.div`
    width: 300px;
    height: 400px;
    background-color: ${(props) => props.theme.colors.textSecondary}15;
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.colors.primary}30;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    span {
        color: ${(props) => props.theme.colors.textSecondary};
        font-size: 0.9rem;
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

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.primary}, transparent);
    margin: 2.5rem 0;
    opacity: 0.4;
`;

// ===============================================
// 2. BOTÕES SOCIAIS
// ===============================================

const SocialButtonsWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

// Botão base apenas com CSS
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
    background-color: #0A66C2;
    &:hover { background-color: #004182; }
`;

const GitHubColor = styled(BaseSocialButton)`
    background-color: ${(props) => props.theme.colors.textSecondary};
    color: ${(props) => props.theme.colors.background};
    &:hover { opacity: 0.9; }
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
                    Minha jornada como desenvolvedora começou com a paixão por resolver problemas reais através da tecnologia. 
                    Especializada em ecossistemas modernos, foco em entregar código limpo e experiências de usuário memoráveis.
                </BioText>
                
                <BioText>
                    Como desenvolvedora Full Stack, transito entre o **React** e **Node.js**, sempre buscando a melhor performance 
                    e escalabilidade para cada projeto.
                </BioText>

                <Divider />

                <SocialButtonsWrapper>
                    {/* Usamos motion.div em volta do botão para a animação */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <LinkedInColor href="https://linkedin.com/in/vanessagomesdev" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn /> LinkedIn
                        </LinkedInColor>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <GitHubColor href="https://github.com/vanessagomes-dev" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </GitHubColor>
                    </motion.div>
                </SocialButtonsWrapper>
            </TextSection>
            
            <SidebarSection>
                <motion.div
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <StyledPhotoFrame>
                        {/* <img src="SUA_FOTO_AQUI" alt="Vanessa" /> */}
                        <span>[ Espaço para sua Foto ]</span>
                    </StyledPhotoFrame>
                </motion.div>
            </SidebarSection>
        </AboutContainer>
    );
};

export default About;