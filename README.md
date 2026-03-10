# Gerador de QR Code e Senhas

Este é um projeto desenvolvido como parte de um desafio para a **Digital Innovation One (DIO)**. Ele combina duas funcionalidades principais: geração de QR Codes e geração de senhas seguras.

## Funcionalidades

- **Gerar QR Code no terminal**: Exibe o QR Code diretamente no terminal.
- **Salvar QR Code como imagem**: Salva o QR Code gerado como um arquivo PNG.
- **Gerar senhas seguras**: Cria senhas aleatórias e seguras com base em critérios definidos pelo usuário.

## Estrutura do Projeto

```
src/
├── index.js                # Arquivo principal para execução do projeto
├── prompts/                # Contém os prompts para interação com o usuário
│   ├── prompt-main.js      # Prompt principal
│   └── prompt-qrcode.js    # Prompt específico para QR Codes
├── services/               # Serviços para geração de QR Codes e senhas
│   ├── qr-code/            # Serviços relacionados a QR Codes
│   │   ├── create.js       # Lógica para criação de QR Codes
│   │   └── handle.js       # Manipulação de QR Codes
│   └── password/           # Serviços relacionados a senhas
│       ├── create.js       # Lógica para criação de senhas
│       └── handle.js       # Manipulação de senhas
```

## Pré-requisitos

- Node.js instalado na máquina.

## Como Executar

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd gerador-qr-code
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   npm start
   ```

## Como Usar

1. Ao iniciar o projeto, você será solicitado a escolher entre gerar um QR Code ou uma senha.
2. Para QR Codes, insira o link ou texto que deseja converter em QR Code e escolha se deseja exibi-lo no terminal ou salvá-lo como um arquivo de imagem.
3. Para senhas, defina os critérios desejados (tamanho, uso de caracteres especiais, etc.) e receba a senha gerada.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **qrcode-terminal**: Biblioteca para exibir QR Codes no terminal.
- **qrcode**: Biblioteca para gerar QR Codes como arquivos de imagem.
- **chalk**: Biblioteca para estilizar a saída do terminal.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.