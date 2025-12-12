import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projectData';

// ===============================================
// 1. ESTILIZAÇÃO (COMPONENTES DE ESTILO)
// ===============================================

const CardContainer = styled(motion.div)`
    background-color: ${(props) => props.theme.colors.surface};
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    flex: 1 1 calc(33.333% - 2rem);
    min-width: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.03); 
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1024px) {
        flex: 1 1 calc(50% - 1rem);
    }
    @media (max-width: 768px) {
        flex: 1 1 100%;
        min-width: unset;
    }
`;

const ImagePlaceholder = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${(props) => props.theme.colors.textSecondary}20; /* Fundo cinza suave */
    border-radius: 8px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    span {
        color: ${(props) => props.theme.colors.textSecondary}80;
        font-style: italic;
        font-size: 0.8rem;
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
    font-size: 0.95rem;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 1.5rem;
    flex-grow: 1;
`;

const TechIconsContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;

    svg {
        font-size: 1.5rem;
        /* Usando textSecondary caso textPrimary dê erro de tipagem */
        color: ${(props) => props.theme.colors.textSecondary}; 
        transition: color 0.3s ease;
        
        &:hover {
             color: ${(props) => props.theme.colors.primary};
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
        margin-right: 0.5rem;
        font-size: 1rem;
    }
`;

const LiveDemoButton = styled(ActionButton)`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    
    &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
`;

const RepoButton = styled(ActionButton)`
    background-color: transparent;
    color: ${(props) => props.theme.colors.textSecondary};
    border: 1px solid ${(props) => props.theme.colors.textSecondary}50;
    
    &:hover {
        background-color: ${(props) => props.theme.colors.textSecondary}10;
        transform: translateY(-2px);
    }
`;

// ===============================================
// 2. COMPONENTE FUNCIONAL
// ===============================================

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <CardContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Espaço para Imagem ou Placeholder */}
            <ImagePlaceholder>
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <span>[ Preview: {project.title} ]</span>
                )}
            </ImagePlaceholder>
            
            <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
            </div>
            
            <div>
                <TechIconsContainer>
                    {project.techIcons.map((tech, index) => (
                        <div key={index} title={tech.name}>
                            <tech.icon />
                        </div>
                    ))}
                </TechIconsContainer>

                <ButtonGroup>
                    {project.liveDemoLink && (
                        <LiveDemoButton href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> Demo
                        </LiveDemoButton>
                    )}
                    
                    <RepoButton href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </RepoButton>
                </ButtonGroup>
            </div>
        </CardContainer>
    );
};

export default ProjectCard;