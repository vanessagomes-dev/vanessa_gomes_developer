import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiRadixui, SiMongodb, SiExpress, SiEjs, SiNestjs, SiAngular, SiFlask, SiSqlite } from 'react-icons/si';

// 1. Tipagem do Projeto
export interface Project {
    title: string;
    category: 'Front-end' | 'Back-end' | 'Full Stack'; // Nomes exatos para os filtros
    description: string;
    techIcons: { icon: IconType; name: string }[];
    liveDemoLink?: string;
    repoLink: string;
    image?: string;
}

// 2. Array Único de Projetos (Essencial para o Filtro Dinâmico)
export const projectData: Project[] = [
    // --- FRONT-END ---
    {
        title: "Dashboard",
        category: "Front-end",
        description: "Dashboard moderno desenvolvido com Next.js, TailwindCSS e Radix UI, com componentes totalmente customizados.",
        techIcons: [
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: SiTailwindcss, name: 'Tailwind' },
            { icon: SiRadixui, name: 'Radix UI' },
            { icon: SiTypescript, name: 'TypeScript' },
        ],
        repoLink: 'https://github.com/vanessagomes-dev/dashboard_tailwind', 
        image: "/dashboard.PNG" 
    },
    {
        title: "Sistema de Reembolso",
        category: "Front-end",
        description: "Sistema de reembolso desenvolvido em React Vite, Tailwind CSS e TypeScript.",
        techIcons: [
            { icon: FaReact, name: 'React' },
            { icon: SiTailwindcss, name: 'Tailwind' },
            { icon: SiTypescript, name: 'TypeScript' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/sistema-de-reembolso",
        image: "/reembolso.png"
    },
    {
        title: "App Hair Day",
        category: "Front-end",
        description: "Aplicação web de agendamentos para salão desenvolvida em JavaScript puro, explorando lógica de programação e DOM.",
        techIcons: [
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: FaHtml5, name: 'HTML5' },
            { icon: FaCss3Alt, name: 'CSS3' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/hairday-app",
        image: "/app-hair-day.PNG"
    },

    // --- BACK-END ---
    {
        title: "Suporte de Tickets (API)",
        category: "Back-end",
        description: "API desenvolvida com Node.js para gerenciar tickets de suporte técnico, permitindo criar, atualizar e listar tickets.",
        techIcons: [
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiJavascript, name: 'JavaScript' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/suporte-tickets",
    },
    {
        title: "TwBot - Chatbot Inteligente",
        category: "Back-end",
        description: "Chatbot inteligente desenvolvido em Python utilizando PNL (Processamento de Linguagem Natural).",
        techIcons: [
            { icon: FaPython, name: 'Python' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/twbot",
        image: "/chatboot.PNG"
    },
    {
        title: "API Flask (Estudos)",
        category: "Back-end",
        description: "Esta é uma API de teste desenvolvida em Flask para fins de estudo.",
        techIcons: [
            { icon: FaPython, name: 'Python' },
            { icon: SiFlask, name: 'Flask' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/projeto_api",
        image: "/api-flask.png"
    },

    // --- FULL STACK ---
    {
        title: "SaaS Multi-Tenant (RBAC)",
        category: "Full Stack",
        description: "Configuração de um SaaS multi-tenant com Next.js, incluindo autenticação e autorização RBAC.",
        techIcons: [
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: SiTypescript, name: 'TypeScript' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/Saas-Next-RBAC",
    },
    {
        title: "Lista de Tarefas (MERN Stack)",
        category: "Full Stack",
        description: "Lista de tarefas desenvolvido com Express, MongoDB e EJS. Foco em operações CRUD.",
        techIcons: [
            { icon: SiMongodb, name: 'MongoDB' },
            { icon: SiExpress, name: 'Express' },
            { icon: SiEjs, name: 'EJS' },
            { icon: SiJavascript, name: 'JavaScript' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/todo-list",
        image: "/todoList.png"
    },
    {
        title: "Library Management",
        category: "Full Stack",
        description: "Aplicação desenvolvida para teste prático com NestJS e Angular, utilizando SQLite.",
        techIcons: [
            { icon: SiSqlite, name: 'SQLite' },
            { icon: SiNestjs, name: 'NestJS' },
            { icon: SiAngular, name: 'Angular' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/library-management",
    },
];

// Opcional: Mantemos o agrupamento apenas se você usá-lo em algum outro lugar do site
export const groupedProjects = projectData.reduce((acc, project) => {
    if (!acc[project.category]) {
        acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
}, {} as Record<Project['category'], Project[]>);