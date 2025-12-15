import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaVideo,
  FaCheckCircle,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

// ===============================================
// 1. ESTILIZAÇÃO (STYLED COMPONENTS)
// ===============================================

// container para envolver toda a página
const ContactPageWrapper = styled(motion.section)`
  padding: 4rem 6rem;
  min-height: 100vh;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}30;
  border-radius: 8px;
  margin: 2rem 2rem;

  @media (max-width: 1024px) {
    padding: 2rem 1.5rem;
    margin: 1rem 1rem; // Ajuste para margem lateral menor
  }

  @media (max-width: 500px) {
    padding: 1.5rem 0.5rem; // Padding muito pequeno
    margin: 0.5rem; // Margem bem pequena
  }
`;

// Título principal da página: "Contato"
const PageTitle = styled.h1`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 3rem;
  text-align: center;
`;

// Container que divide a página em Form e Links
const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

//  SEPARADOR VERTICAL
const VerticalDivider = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.textSecondary}30;
  align-self: stretch; /* Faz a linha esticar para ocupar a altura total */

  @media (max-width: 1024px) {
    width: 100%;
    height: 1px;
    margin: 2rem 0;
  }
`;

// Subtítulo Fale Comigo!
const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const FormSection = styled.div`
  flex: 1;
`;

// Subtitulo Conecte-se comigo
const SocialTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

// Grid para os botões de contato
const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 1.2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espaçamento entre as seções Fale Comigo e Conecte-se */
`;

// Botões da Direita (Contato e Sociais)
const ContactCard = styled(motion.a)`
  background: ${(props) => props.theme.colors.surface};
  width: 200px;
  height: 120px;
  border-radius: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}20;
  color: ${(props) => props.theme.colors.textSecondary};
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem; /* TAMANHO AJUSTADO AQUI */
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

//  Estilos do Formulário (Formulário, InputGroup, etc.)
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}40;
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.textSecondary}40;
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const ErrorText = styled.span`
  color: #ff4d4d;
  font-size: 0.85rem;
`;

const SendButton = styled(motion.button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

// Modal de Sucesso
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;

  svg {
    font-size: 4rem;
    color: #2ecc71;
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  button {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

// ===============================================
// 2. LÓGICA DO COMPONENTE
// ===============================================

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    // Validação Nome: Deve ter sobrenome e ser apenas letras e espaços
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
    if (!nameRegex.test(formData.name.trim())) {
      tempErrors.name = "Por favor, insira seu nome e pelo menos um sobrenome.";
    }

    // Validação E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = "Insira um e-mail válido.";
    }

    // Validação Mensagem: Min 30 caracteres
    if (formData.message.trim().length < 30) {
      tempErrors.message = `A mensagem deve conter no mínimo 30 caracteres. (Atualmente ${
        formData.message.trim().length
      })`;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
       
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

        // Configuração da chamada à API
        const response = await axios.post(
          `${apiUrl}/api/send-email`, 
          formData
        );

        if (response.data.success) {
          console.log("Resposta da API:", response.data.message);

          // Sucesso!
          setShowModal(true);
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          // Se a API retornar sucesso=false (ex: erro de Nodemailer)
          alert("Erro no envio: " + response.data.message);
          console.error("Erro na API:", response.data.message);
        }
      } catch (error) {
        // Erro de conexão (ex: servidor Node offline) ou erro 500
        console.error("Erro ao conectar com a API:", error);
        alert("Erro de conexão ou servidor. Tente novamente mais tarde.");
      }
    } else {
      console.log("Formulário inválido. Corrija os erros.");
    }
  };

  return (
    <ContactPageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <PageTitle>Contato</PageTitle>

      <ContentWrapper>
        {/* LADO ESQUERDO: FORMULÁRIO */}
        <FormSection>
          <ContactForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Nome Completo</Label>
              <Input
                type="text"
                placeholder="Seu nome e sobrenome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label>E-mail</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label>Mensagem</Label>
              <TextArea
                placeholder="Como posso te ajudar?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </InputGroup>

            <SendButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </SendButton>
          </ContactForm>
        </FormSection>

        {/* SEPARADOR VERTICAL */}
        <VerticalDivider />

        {/* LADO DIREITO: BOTÕES DE CONTATO E SOCIAIS */}
        <LinksWrapper>
          {/* SEÇÃO 1: FALE COMIGO! (Contatos diretos) */}
          <div>
            <SectionTitle>Fale Comigo!</SectionTitle>
            <InfoSection>
              <ContactCard href="https://wa.me/5511913179246" target="_blank">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </ContactCard>

              <ContactCard href="https://t.me/vanessagomesdev" target="_blank">
                <FaTelegramPlane />
                <span>Telegram</span>
              </ContactCard>

              <ContactCard href="mailto:vanessagomesdev@gmail.com">
                <FaEnvelope />
                <span>E-mail</span>
              </ContactCard>

              <ContactCard href="https://meet.google.com/new" target="_blank">
                <FaVideo />
                <span>Marcar Call</span>
              </ContactCard>
            </InfoSection>
          </div>

          {/* SEÇÃO 2: CONECTE-SE COMIGO (Redes Sociais) */}
          <div>
            <SocialTitle>Conecte-se comigo!</SocialTitle>
            <InfoSection>
              <ContactCard
                href="https://linkedin.com/in/vanessagomesdev"
                target="_blank"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </ContactCard>

              <ContactCard
                href="https://github.com/vanessagomes-dev"
                target="_blank"
              >
                <FaGithub />
                <span>GitHub</span>
              </ContactCard>
            </InfoSection>
          </div>
        </LinksWrapper>
      </ContentWrapper>

      {/* MODAL DE SUCESSO */}
      <AnimatePresence>
        {showModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <FaCheckCircle />
              <h2>Mensagem enviada com sucesso!</h2>
              <p>Obrigada pelo contato! Responderei em breve.</p>
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ContactPageWrapper>
  );
};

export default Contact;
