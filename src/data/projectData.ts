import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiRadixui, SiMongodb, SiExpress, SiEjs, SiNestjs, SiAngular, SiFlask, SiSqlite } from 'react-icons/si';

// Tipagem do Projeto
export interface Project {
    title: string;
    category: 'Front-end' | 'Back-end' | 'Full Stack';
    description: string;
    techIcons: { icon: IconType; name: string }[];
    liveDemoLink?: string;
    repoLink: string;
    image?: string; // Para futuras miniaturas
}

// ===============================================
// DADOS DOS PROJETOS
// ===============================================

export const projectData: Project[] = [
    // --- FRONT-END ---
    {
        title: "Dashboard",
        category: "Front-end",
        description: "Dashboard moderno desenvolvido com Next.js, TailwindCSS e Radix UI, com componentes totalmente customizados, animações fluidas e interface responsiva. Um projeto focado em arquitetura limpa, acessibilidade e experiência do usuário.",
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
        description: "Aplicação web de agendamentos para salão desenvolvida em JavaScript puro, explorando lógica de programação, DOM, eventos, callbacks, Promises, async/await, classes, módulos e consumo de APIs. Projeto focado em fundamentos da linguagem antes do uso de frameworks.",
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
        description: "API desenvolvida com Node.js para gerenciar tickets de suporte técnico, permitindo criar, atualizar (informações e status) e listar tickets com filtros por status.",
        techIcons: [
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiJavascript, name: 'JavaScript' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/suporte-tickets",
        // image: "/suporte-tickets"
    },
    {
        title: "TwBot - Chatbot Inteligente",
        category: "Back-end",
        description: "Chatbot inteligente desenvolvido em Python, projetado para responder perguntas, realizar tarefas básicas e interagir com usuários, utilizando PNL (Processamento de Linguagem Natural). Inclui interface gráfica simples com Tkinter.",
        techIcons: [
            { icon: FaPython, name: 'Python' },
            { icon: FaPython, name: 'Tkinter' }, 
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
        repoLink: "https://github.com/vanessagomes-dev/projeto_api....",
        image: "/api-flask.png"
    },

    // --- FULL STACK ---
    {
        title: "SaaS Multi-Tenant (RBAC)",
        category: "Full Stack",
        description: "Projeto contendo todo o código necessário para configurar um SaaS multi-tenant com Next.js, incluindo autenticação e autorização RBAC (Role-Based Access Control).",
        techIcons: [
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: FaReact, name: 'RBAC' }, 
        ],
        repoLink: "https://github.com/vanessagomes-dev/Saas-Next-RBAC",
        // image:"/saas-next.png"
    },
    {
        title: "Lista de Tarefas (MERN Stack)",
        category: "Full Stack",
        description: "Lista de tarefas desenvolvido com Express, MongoDB e EJS. O objetivo é permitir que os usuários criem, visualizem, completem e removam tarefas de forma simples e intuitiva, com um design responsivo.",
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
        description: "Aplicação desenvolvida para teste prático com NestJS e Angular, utilizando SQLite para gerenciamento de biblioteca.",
        techIcons: [
            { icon: SiSqlite, name: 'SQLite' },
            { icon: SiNestjs, name: 'NestJS' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiAngular, name: 'Angular' },
        ],
        repoLink: "https://github.com/vanessagomes-dev/library-management",
        // image: "/library.png"
    },
];

// Função utilitária para agrupar os projetos por categoria
export const groupedProjects = projectData.reduce((acc, project) => {
    if (!acc[project.category]) {
        acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
}, {} as Record<Project['category'], Project[]>);