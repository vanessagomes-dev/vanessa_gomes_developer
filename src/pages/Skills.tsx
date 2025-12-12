import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillCategories, softSkills } from '../data/skillsData';

// --- ESTILIZAÇÃO ---

const SkillsContainer = styled(motion.section)`
  padding: 4rem 6rem;
  min-height: 100vh;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
  border-radius: 8px;
  margin: 2rem 2rem;

  @media (max-width: 1024px) { padding: 3rem 2rem; }
  @media (max-width: 768px) { padding: 2rem 1rem; }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 3rem;
  text-align: center;
  span { color: ${(props) => props.theme.colors.primary}; }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 3rem 0 2rem;
  text-align: left;
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  padding-left: 15px;
`;

const CategoriesGrid = styled.div`
  display: grid;
  /* Força 3 colunas em telas grandes */
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;

  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const CategoryCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}20;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.background};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
  border: 1px solid transparent;

  svg { color: ${(props) => props.theme.colors.primary}; font-size: 1.1rem; }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: white;
  }
`;

// --- COMPONENTE ---

const Skills: React.FC = () => {
  return (
    <SkillsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageTitle>Minhas <span>Skills</span></PageTitle>

      {/* Hard Skills Section */}
      <SectionHeading>Habilidades Técnicas</SectionHeading>
      <CategoriesGrid>
        {skillCategories.map((cat, idx) => (
          <CategoryCard 
            key={idx}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <CategoryTitle>{cat.title}</CategoryTitle>
            <SkillList>
              {cat.skills.map((skill, sIdx) => (
                <SkillTag key={sIdx} whileHover={{ scale: 1.05 }}>
                  <skill.icon />
                  {skill.name}
                </SkillTag>
              ))}
            </SkillList>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      {/* Soft Skills Section */}
      <SectionHeading>Soft Skills</SectionHeading>
      <CategoriesGrid>
        <CategoryCard style={{ gridColumn: "1 / -1" }}>
          <SkillList style={{ justifyContent: 'center' }}>
            {softSkills.map((skill, idx) => (
              <SkillTag key={idx} whileHover={{ scale: 1.05 }} style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                <skill.icon />
                {skill.name}
              </SkillTag>
            ))}
          </SkillList>
        </CategoryCard>
      </CategoriesGrid>

    </SkillsContainer>
  );
};

export default Skills;