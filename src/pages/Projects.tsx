import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';

// --- ESTILIZAÇÃO ---

const ProjectsContainer = styled(motion.section)`
    min-height: 100vh; 
    padding: 4rem 6rem;
    margin: 2rem 2rem;
    
    @media (max-width: 1024px) {
        padding: 2rem 1.5rem;
    }
`;

const PageTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 2rem;
    text-align: center;
    
    span {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
    padding: 0.6rem 1.8rem;
    border-radius: 50px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => (props.$active ? props.theme.colors.primary : 'transparent')};
    color: ${(props) => (props.$active ? '#fff' : props.theme.colors.primary)};
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${(props) => (props.$active ? `0 4px 15px ${props.theme.colors.primary}60` : 'none')};

    &:hover {
        transform: translateY(-3px);
        background: ${(props) => props.theme.colors.primary};
        color: #fff;
    }
`;

const ProjectsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2.5rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

// --- COMPONENTE ---

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('Todos');

    // Extrai as categorias dinamicamente do seu projectData
    const categories = useMemo(() => {
        const cats = projectData.map(p => p.category);
        return ['Todos', ...Array.from(new Set(cats))];
    }, []);

    // Filtra os projetos
    const filteredProjects = useMemo(() => {
        if (filter === 'Todos') return projectData;
        return projectData.filter(project => project.category === filter);
    }, [filter]);

    return (
        <ProjectsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <PageTitle>Meus <span>Projetos</span></PageTitle>

            {/* Barra de Filtros Dinâmica */}
            <FilterContainer>
                {categories.map(cat => (
                    <FilterButton 
                        key={cat}
                        $active={filter === cat}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </FilterButton>
                ))}
            </FilterContainer>

            {/* Grid com animação de reposicionamento (layout) */}
            <ProjectsGrid layout>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title} // Usando title como chave única
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </ProjectsGrid>
        </ProjectsContainer>
    );
};

export default Projects;