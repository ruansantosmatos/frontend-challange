# Desafio Técnico - Áurea Phidital  

Software desenvolvido com o objetivo de recriar os requesitos técnicos estipulados pela instituição Áurea Phidital no proceso seletivo
de desenvolvedor Front-End. Assim como, desenvolver funcionalidade de manipulação de dados, criação de informações, autenticação, dentre outras. 

## Conceitos Aplicados no Projeto:

- Login
- Logout
- Registro de informações
- Atualização de dados
- Exclusão de Registros
- Seleção de informações
- Integração de API
- Manipulação de Sessão
- Designer Patterns Componentes
- Responsividade
- UI/UX

## Funcionalidades

- Permite o usuário efetuar login.
- Permite o usuário efetuar logout
- Permite a criação de uma novo perfil do usuário.
- Permite Registrar um novo equipamento
- Permite Excluir determinado equipamento
- Permite Atualizar informações de equipamento
- Permite Listar todas as informações registradas
- Permite Filtrar determinado equipamento

## Tecnologias Utilizadas:

- NextJs
- Typescript
- Yup
- Json-Server
- Chakra-ui

## Requisitos

Para visualizar e modificar o projeto, você precisará de:

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Um editor de texto ou IDE para edição de código (VSCode, Sublime Text, etc.).
- Sistema operacional MacOS, Windows ou Linux.
- Node.js 18.18 ou maior.

## Como Usar

1. **Inicie um projeto Next**:
    ```bash
    npx create-next-app@latest <NameApp>
    ```

2. **Clone este repositório**:
    ```bash
    git clone https://github.com/ruansantosmatos/frontend-challange.git
    ```
    
3. **Inicie o prompt de comando no diretório (pasta) do projeto e execute o comando**:
    ```bash
    npm run dev
    ```

4. **Inicie um novo prompt de comando no diretório (pasta) do projeto e execute o comando**:
    ```bash
    npm run database
    ```

5. **NOTA**:
    - Torna-se necessário a execução de todas as diretrizes para a execução correta do projeto.
    a utilização dos scripts descritos respectivamente nas etapas 3 e 4 permite que o projeto inicialize
    o servidor local e compile as informações do software, assim como, o comando especificado na etapa 4 inicializa
    a base de dados local, permitindo que todas as funcionalidades possam acessar seus respectivos endpoint.

## Estrutura do Projeto

```plaintext
├── public                   # Diretório que possui utilitários gerais (icones, imagens, dentre outros).

├── src
    ├── api                  # Diretório responsável por definir os endpoints da API para consumo.
        └── config           # Arquivo contendo as configurações da API.
        └── models           # Tipagem estrutural das entendidades da base de dados.
    
    ├── app                  # Diretório principal contendo todas as rotas e páginas da aplicação.
    
    ├── components           # Diretório contendo componentes globais e de bibliotecas.
        └── ui               # Diretório gerado para componentes tailwind CSS da biblioteca Sadcn UI.
    ├── lib                  # Diretório que possui componente base para a utilização do Sadcn UI.
    
    ├── services             # Diretório responsável por conter funções que podem ser utilizadas de maneiras gerais.
    
    ├── styles               # Diretório que possui os arquivos de estilos gerais da aplicação.

```

## Observações

1. Para executar o processo de login com a conta google, torna-se necessário a utilização do 
código das crendenciais de acesso para a aplicação, consulte a documentação oficial:
[Google Identity](https://developers.google.com/identity/protocols/oauth2?hl=pt-br)

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver ideias para melhorias, 
sinta-se à vontade para enviar um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT.
