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

## Fluxo de Interação 

- Crie um novo usuário na página de cadastro
- Faça login utilizando as informações geradas na página de cadastro
- Adicione um novo produto
- Edite o produto adicionado ou qualquer outro registro
- Delete registros diversos
- Pesquise registros utilizando filtros disponíveis
- Executar logout selecionando o icone localizado na parte superior direita

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
    a utilização dos scripts descritos respectivamente nas etapas 3 e 4 permite que o projeto inicialize
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

1. Adição de mais acessabilidades em funcionalidades de interação com tabelas
2. Adição de testes unitários para novos e antigos componentes
3. Melhoria de designer visual
4. Adição de filtros por data e valor na tabela de equipamentos
5. Adição de funcionalidade de redefinição de senha
   
## Observações

1. A utilização da biblioteca de componentes Chakra-ui teve como finalidade apenas na criação
do componente de tabela, respeitando as diretrizes estipuladas na documentação técnica

2. Durante o processo de criação, foram adicionadas novas informações e funcionalidades
com objetivo de recriar cenários mais próximos a realidade.

## Licença
Este projeto está licenciado sob a Licença MIT.
