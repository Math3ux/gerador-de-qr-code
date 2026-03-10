import chalk from "chalk";

const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow.bold('Digite o link para gerar o QR Code'),
        required: true
    },
    {
        name: "type",
        description: chalk.yellow.bold('Escolha o tipo do QR Code (1 - Terminal, 2 - PNG)'),
        required: true,
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha uma opção válida (1 ou 2)'),
    },
    
];

export default promptQRCode;