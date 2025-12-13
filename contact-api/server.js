const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = 5000; 

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,POST',
}));
app.use(express.json());

// ----------------------------------------------------
// 1. Configuração do Nodemailer (SMTP)
// ----------------------------------------------------
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: process.env.EMAIL_USER,    
        pass: process.env.EMAIL_PASS, 
    },
});

// ----------------------------------------------------
// 2. Rota de Envio do Formulário
// ----------------------------------------------------
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validação básica do backend (melhoria de segurança)
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Dados incompletos.' });
    }

    // Configuração do E-mail
    const mailOptions = {
        from: `"${name}" <${email}>`, 
        to: process.env.EMAIL_USER, 
        subject: `Novo Contato do Portfólio: ${name}`,
        html: `
            <h1>Detalhes do Contato</h1>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`E-mail enviado de: ${email}`);
        res.json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ success: false, message: 'Falha no envio da mensagem.' });
    }
});

// ----------------------------------------------------
// 3. Inicialização
// ----------------------------------------------------
app.listen(PORT, () => {
    console.log(`API de Contato rodando em http://localhost:${PORT}`);
});