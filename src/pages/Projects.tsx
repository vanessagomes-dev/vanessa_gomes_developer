import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { groupedProjects, type Project } from '../data/projectData';

// ===============================================
// 1. ESTILIZAÇÃO DA PÁGINA
// ===============================================

const ProjectsContainer = styled(motion.section)`
    min-height: 100vh; 
    padding: 4rem 6rem;
    border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
    border-radius: 8px;
    margin: 2rem 2rem;
    
    @media (max-width: 1024px) {
        padding: 2rem 1.5rem;
    }
`;

const PageTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 3rem;
    text-align: center;
    
    span {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const CategorySection = styled.div`
    margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.textSecondary}30;
`;

const ProjectsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start; 
    
    @media (max-width: 768px) {
        justify-content: center; 
    }
`;

// ===============================================
// 2. COMPONENTE FUNCIONAL
// ===============================================

const Projects: React.FC = () => {
    return (
        <ProjectsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <PageTitle>Meus <span>Projetos</span></PageTitle>

            {/* Mapeia as categorias e renderiza a seção correspondente */}
            {Object.keys(groupedProjects).map((category) => (
                <CategorySection key={category}>
                    <CategoryTitle>{category}</CategoryTitle>
                    <ProjectsGrid>
                        {groupedProjects[category as keyof typeof groupedProjects].map((project: Project, index: number) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                            />
                        ))}
                    </ProjectsGrid>
                </CategorySection>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;