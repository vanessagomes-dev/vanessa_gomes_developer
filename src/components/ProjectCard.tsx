import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projectData";

// --- ESTILIZAÇÃO ---

const CardContainer = styled(motion.create("div"))`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); /* Sombra inicial bem leve */
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}10;

  @media (max-width: 768px) {
    min-width: unset;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.theme.colors.textSecondary}20;
  border-radius: 8px;
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

const CategoryBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.primary}15;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary}30;
  width: fit-content;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  min-height: 40px;
`;

const TitleLinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;

  &:hover h3 {
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.3s ease;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 4.2rem; /* Garante que mesmo descrições curtas ocupem o mesmo espaço */
`;

const TechIconsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  svg {
    font-size: 1.5rem;
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

const RepoButton = styled(ActionButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  border: 1px solid ${(props) => props.theme.colors.textSecondary}50;

  &:hover {
    background-color: ${(props) => props.theme.colors.textSecondary}10;
    transform: translateY(-2px);
  }
`;

// --- COMPONENTE ---

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardContainer
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      }}
    >
      <TitleLinkWrapper
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImagePlaceholder>
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <span>[ Preview: {project.title} ]</span>
          )}
        </ImagePlaceholder>

        <CategoryBadge>{project.category}</CategoryBadge>
        <ProjectTitle>{project.title}</ProjectTitle>
      </TitleLinkWrapper>

      <ProjectDescription>{project.description}</ProjectDescription>

      <div>
        <TechIconsContainer>
          {project.techIcons.map((tech, index) => (
            <div key={index} title={tech.name}>
              <tech.icon />
            </div>
          ))}
        </TechIconsContainer>

        <ButtonGroup>
          <RepoButton
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Repositório
          </RepoButton>
        </ButtonGroup>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
