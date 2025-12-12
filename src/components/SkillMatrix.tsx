import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillData, type SkillCategory, type Skill } from '../data/skillsData'; 

// ===============================================
// 1. ESTILIZAÇÃO
// ===============================================

const SkillMatrixContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3rem;
`;

const CategoryTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary}; 
    margin-bottom: 1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.textSecondary}30;
    padding-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem; /* Espaçamento entre os cards */
`;

const SkillCard = styled(motion.div)`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background}10; /* Fundo levemente transparente */
    border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    /* Animação suave no hover */
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        color: ${(props) => props.theme.colors.primary}; /* Ícone colorido */
    }

    span {
        font-size: 1rem;
        font-weight: 500;
        color: ${(props) => props.theme.colors.textSecondary};
    }
`;

// ===============================================
// 2. COMPONENTE FUNCIONAL
// ===============================================

const SkillMatrix: React.FC = () => {
    return (
        <SkillMatrixContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {skillData.map((categoryGroup:SkillCategory, index: number) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }} 
                >
                    <CategoryTitle>{categoryGroup.category}</CategoryTitle>
                    <SkillsGrid>
                        {categoryGroup.skills.map((skill: Skill, skillIndex: number) => (
                            <SkillCard 
                                key={skillIndex}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <skill.icon />
                                <span>{skill.name}</span>
                            </SkillCard>
                        ))}
                    </SkillsGrid>
                </motion.div>
            ))}
        </SkillMatrixContainer>
    );
};

export default SkillMatrix;