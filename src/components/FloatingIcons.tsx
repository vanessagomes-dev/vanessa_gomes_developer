import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Seus ícones
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

// 1. Estilização do Container de Fundo (Circuitos)
const IconsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  
  /* Fundo de circuito (mantido) */
  background-image: url('/circuit-bg.svg'); 
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  filter: grayscale(100%) brightness(150%) saturate(50%);
`;

// 2. O Container que GIRA (Orbiter)
const Orbiter = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o container */
  width: 500px; /* Diâmetro da órbita */
  height: 500px; 
  border-radius: 50%;
  /* REMOVIDO: border: 1px solid rgba(138, 43, 226, 0.3); /* Borda fina como na imagem */ 
  /* Adicionei o anel de brilho via box-shadow */
  box-shadow: 0 0 150px 30px rgba(138, 43, 226, 0.15); 
`;

// 3. Estilização dos Ícones Individuais (posicionamento dentro do Orbiter)
const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2.5rem; /* Reduzido o tamanho para caber no círculo */
  filter: drop-shadow(0 0 8px ${props => props.theme.colors.primary}50);
  padding: 0.5rem; /* Espaço para o ícone */
  border-radius: 50%;
`;

// 4. Definição das Propriedades de Animação do Orbiter
const orbiterVariants = {
  animate: {
    rotate: 360, // Gira 360 graus
    transition: {
      duration: 50, // Duração longa para rotação lenta e suave
      repeat: Infinity,
      ease: "linear" as const, // Movimento linear constante
    }
  }
};

const FloatingIcons: React.FC = () => {
  // A rotação dos ícones deve ser contrária à rotação do Orbiter para que fiquem na vertical
  const counterRotate = { rotate: -360, transition: orbiterVariants.animate.transition };

  return (
    <IconsContainer>
      <Orbiter 
        variants={orbiterVariants}
        animate="animate"
      >
        {/* Ícone 1: React (Posicionado no topo) */}
        <FloatingIcon 
          animate={counterRotate} // Contrarrotação
          style={{ top: 0, left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <FaReact color="#61DAFB" size={40} />
        </FloatingIcon>

        {/* Ícone 2: JavaScript (Posicionado à direita) */}
        <FloatingIcon 
          animate={counterRotate}
          style={{ top: '50%', right: 0, transform: 'translate(50%, -50%)' }}
        >
          <FaJs color="#F7DF1E" size={40} />
        </FloatingIcon>

        {/* Ícone 3: Node.js (Posicionado embaixo) */}
        <FloatingIcon 
          animate={counterRotate}
          style={{ bottom: 0, left: '50%', transform: 'translate(-50%, 50%)' }}
        >
          <FaNodeJs color="#68A063" size={40} />
        </FloatingIcon>

        {/* Ícone 4: TypeScript (Posicionado à esquerda) */}
        <FloatingIcon 
          animate={counterRotate}
          style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)' }}
        >
          <SiTypescript color="#007ACC" size={40} />
        </FloatingIcon>

        {/* Ícone 5: HTML5 (Diagonal superior-esquerda) */}
        <FloatingIcon 
          animate={counterRotate}
          style={{ top: '10%', left: '10%', transform: 'translate(-50%, -50%)' }}
        >
          <FaHtml5 color="#E34F26" size={40} />
        </FloatingIcon>

        {/* Ícone 6: CSS3 (Diagonal inferior-direita) */}
        <FloatingIcon 
          animate={counterRotate}
          style={{ bottom: '10%', right: '10%', transform: 'translate(50%, 50%)' }}
        >
          <FaCss3Alt color="#1572B6" size={40} />
        </FloatingIcon>
        
      </Orbiter>
    </IconsContainer>
  );
};

export default FloatingIcons;