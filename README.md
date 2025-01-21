# Desafio Técnico - Áurea Phidital  

Software desenvolvido visando recriar os requisitos técnicos estipulados pela instituição Áurea Phidital no processo seletivo
de desenvolvedor Front-End. Assim como, desenvolver funcionalidade de manipulação de dados, criação de informações, autenticação, responsividade,
roteamento de páginas, dentre outros aspectos técnicos. 

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
- Permite a criação de um novo perfil do usuário.
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

## Fluxo de Interação 

- Crie um novo usuário na página de cadastro
- Faça login utilizando as informações geradas na página de cadastro
- Adicione um novo produto
- Edite o produto adicionado ou qualquer outro registro
- Delete registros diversos
- Pesquise registros utilizando filtros disponíveis
- Executar logout selecionando o ícone localizado na parte superior direita e selecionando a opção "sair"

## Acesso Padrão

- email: developer@teste.com
- password: 123456789

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

5. **NOTA**: Torna-se necessário a execução de todas as diretrizes para a execução correta do projeto.
A utilização dos scripts descritos respectivamente nas etapas 3 e 4 permite que o projeto inicialize
o servidor local e compile as informações do software, assim como, o comando especificado na etapa 4 inicializa
a base de dados local, permitindo que todas as funcionalidades possam acessar seus respectivos endpoint.

## Visualização

- Para visualizar a aplicação acesse o endereço [http://localhost:3000](http://localhost:3000)

- Caso a porta padrão (3000) esteja sendo utilizada, verifique as informações
geradas no prompt de comando após a execução da etapa 3 na sessão anterior.

## Estrutura do Projeto

```plaintext
├── public                   # Diretório que possui utilitários gerais (icones, imagens, dentre outros).

├── src
    ├── api                  # Diretório responsável por definir os endpoints da API.
        └── config           # Diretório contendo configurações globais para API (header, endpoint base, porta).
        └── services         # Diretório responsável por conter os endpoints da API.
    
    ├── app                  # Diretório principal contendo todas as rotas e páginas da aplicação.
        └── modules          # Diretório responsável no armazenamento de todas as rotas privadas/páginas da aplicação.

    ├── components           # Diretório responsável na organização de componentes globais e específicos utlizados nas páginas.
        └── styles           # Diretório responsável pelo armazenamento de estilização de componentes globais.
        └── modules          # Diretório de componentes utilizados em determinada página.
            └── styles       # Diretório responsável pelo armazenamento de estilização de componentes específicos/páginas

    ├── functions            # Diretório responsável por possuir diversar funções utilitárias como: formatação de valor, geração de código, etc...
    
    ├── styles               # Diretório que possui os arquivos de estilos das páginas publicas, privadas, layouts e templates.

    ├── types                # Diretório responsável por possuir tipagem de dados utilizada nas páginas

```
## Melhorias

- Adição de mais acessibilidades em funcionalidades de interação com tabelas
- Adição de testes unitários para novos e antigos componentes
- Melhoria de designer visual
- Adição de filtros por data e valor na tabela de equipamentos
- Adição de funcionalidade de redefinição de senha
   
## Observações

- A utilização da biblioteca de componentes Chakra-ui teve como finalidade apenas na
criação do componente de tabela, respeitando as diretrizes estipuladas na documentação técnica.


- Durante o processo de criação, foram adicionadas novas informações e funcionalidades
visando recriar cenários mais próximos à realidade.

## Licença
Este projeto está licenciado sob a Licença MIT.
