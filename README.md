# TanStack React Query HTTP State

Este projeto é um exemplo prático de como utilizar o Tanstack React Query para gerenciar o estado HTTP em um aplicativo React. Ele demonstra como integrar o React Query com um servidor JSON (json-server) para fornecer dados de exemplo e simular operações de CRUD (Create, Read) somentes.

## Funcionalidades

Gerenciamento de Estado HTTP: Utiliza o Tanstack React Query para gerenciar o estado de dados obtidos via HTTP.
Servidor JSON: Inclui um json-server para fornecer dados de exemplo e simular uma API RESTful.
Componentes Personalizados: Exibe como criar componentes React personalizados, incluindo tabelas expansíveis e badges de status.
Exemplo de Legenda: Inclui uma legenda personalizada para os diferentes status dos commits.

Este projeto utiliza o Vite como bundler e servidor de desenvolvimento para a aplicação React, proporcionando um ambiente de desenvolvimento rápido e moderno. Para mais informações, visite [Vite](https://vite.dev/guide/).

## Ferramentas de Linting e Formatação

Este projeto utiliza o **Biome.js** em vez do Prettier e ESLint para linting e formatação de código, pois é significativamente mais rápido e eficiente. Para mais informações, visite [Biome.js](https://biomejs.dev/pt-br/).

## Tecnologias Utilizadas / Bibliotecas Instaladas

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[TanStack React Query](https://tanstack.com/query/latest)**: Biblioteca para gerenciamento de estado assíncrono em React.
- **[json-server](https://www.npmjs.com/package/json-server)**: Ferramenta para criar uma API REST falsa rapidamente.
- **[Axios](https://axios-http.com/ptbr/docs/intro)**: Cliente HTTP baseado em Promises para o navegador e Node.js.
- **[MUI Data Grid](https://mui.com/x/react-data-grid/)**: Biblioteca de componentes de tabela de dados para React, parte do Material-UI.
- **[MUI](https://mui.com/material-ui/getting-started/)**: Biblioteca de componentes de interface de usuário para React.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização rápida e eficiente.
- **[clsx](https://www.npmjs.com/package/clsx)**: Utilitário para condicionalmente juntar classes CSS.
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Utilitário para mesclar classes Tailwind CSS de forma eficiente.
- **[uuid](https://www.npmjs.com/package/uuidv4)**: Biblioteca para gerar identificadores únicos universais (UUIDs), utilizada para criar IDs únicos.


## Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

## Instalação

1. Clone o repositório:
  ```bash
  git clone git@github.com:gilsonrusso/tanstack-httpstate.git
  cd tanstack-reactquery-httpstate
  ```

2. Instale as dependências:
  ```bash
  npm install
  ```

## Executando a Aplicação

1. Inicie o json-server:
  ```bash
  npm run api
  ```

2. Em outro terminal, inicie a aplicação React:
  ```bash
  npm run dev
  ```

A aplicação React estará disponível em `http://localhost:5173` e o json-server em `http://localhost:3000`.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação React.
- `db.json`: Arquivo de configuração do json-server.

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para contribuir com o projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.