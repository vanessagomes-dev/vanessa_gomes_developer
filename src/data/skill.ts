import { FaReact, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql, SiMongodb } from 'react-icons/si';
import { type IconType } from 'react-icons';

export interface Skill {
    name: string;
    icon: IconType;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const skillData: SkillCategory[] = [
    {
        category: "Front-end & Mobile",
        skills: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            // Adicione outras conforme necessário
        ]
    },
    {
        category: "Back-end & Runtime",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "PHP", icon: FaPhp },
            // Adicione outras conforme necessário
        ]
    },
    {
        category: "Bancos de Dados",
        skills: [
            { name: "SQL (MySQL/Postgres)", icon: SiMysql },
            { name: "NoSQL (MongoDB)", icon: SiMongodb },
            { name: "Outros DBs", icon: FaDatabase },
        ]
    }
];