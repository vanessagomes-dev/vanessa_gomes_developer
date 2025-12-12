import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaLaravel, FaGitAlt, 
  FaGithub, FaGitlab, FaFigma, FaLightbulb, FaUsers, FaComments, FaRocket, FaHandsHelping,
  FaSyncAlt, FaColumns, FaProjectDiagram, FaLock, FaGlobe
} from 'react-icons/fa';

import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap, SiPrisma, SiMysql, 
  SiPostgresql, SiMongodb, SiPostman, SiDocker, SiAngular
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ]
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "Python", icon: FaPython },
      { name: "Prisma", icon: SiPrisma },
      { name: "APIs RESTful", icon: FaGlobe },
      { name: "Integração", icon: FaProjectDiagram },
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB (NoSQL)", icon: SiMongodb },
    ]
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "GitLab", icon: FaGitlab },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ]
  },
  {
    title: "Metodologias & Outros",
    skills: [
      { name: "Scrum", icon: FaSyncAlt }, 
      { name: "Kanban", icon: FaColumns }, 
      { name: "SaaS", icon: FaRocket },
      { name: "RBAC", icon: FaLock }, 
      { name: "Testes Manuais", icon: FaJs },
    ]
  },
  {
    title: "Conhecimentos Básicos",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Angular", icon: SiAngular },
    ]
  }
];

export const softSkills = [
  { name: "Facilidade de Aprendizagem", icon: FaLightbulb },
  { name: "Trabalho em Equipe", icon: FaUsers },
  { name: "Comunicativa", icon: FaComments },
  { name: "Proatividade", icon: FaRocket },
  { name: "Resolução de Problemas", icon: FaHandsHelping },
];