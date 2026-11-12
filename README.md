# Papelaria Express — Atividade Prática de DevOps

Aplicação fullstack de consulta de produtos desenvolvida com Node.js, Express, PostgreSQL e Frontend estático (HTML, CSS e JavaScript), estruturada para práticas de ESLint, testes automatizados e CI/CD.

## Como Rodar o Projeto

### 1. Configurar variáveis de ambiente

Dentro da pasta `api/`, crie um arquivo `.env` baseado no `.env.example`:

```env
PORT=3001
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/papelaria
DIRECT_URL=postgresql://postgres:postgres@localhost:5433/papelaria
```

- **DATABASE_URL**: usada pela API para o pool de conexões da aplicação.
- **DIRECT_URL**: usada pela migration para operações DDL diretas no banco.

### 2. Subir o Banco de Dados e a API (Docker)

Na raiz do projeto, execute o comando abaixo para construir e iniciar os containers do PostgreSQL (porta `5433`) e da API (porta `3001`):

```bash
docker compose up -d --build
```

* Para verificar se a API e o banco estão saudáveis, acesse: `http://localhost:3001/health`
* Para consultar os produtos diretamente pela API, acesse: `http://localhost:3001/produtos`

### 3. Iniciar o Frontend

Abra um novo terminal na raiz do projeto e escolha uma das opções abaixo para servir os arquivos estáticos na porta `5500`:

**Usando Node.js (`http-server`):**

```bash
npx http-server front -p 5500 -c-1
```

**Usando Python 3 (nativo no Linux):**

```bash
cd front
python3 -m http.server 5500
```

Depois, abra o navegador em: `http://localhost:5500`

---

## Comandos Úteis (Desenvolvimento e Testes)

Caso queira rodar os scripts da API localmente (dentro da pasta `api/`):

```bash
cd api
npm install                # Instala as dependências
npm run migrate            # Cria a tabela e insere os produtos iniciais
npm run lint               # Verifica a padronização do código com ESLint
npm test                   # Executa os testes unitários (node --test)
npm run test:integration   # Executa os testes de integração com o banco local
```

### Testes E2E (Cypress)

Para executar os testes end-to-end, primeiro suba o banco e a API via Docker:

```bash
docker compose up -d --build
```

Depois, em outro terminal, execute o Cypress (ele iniciará o servidor frontend automaticamente):

```bash
cd api
npm run cy:run
```

> **Nota**: O script `cy:run` usa `start-server-and-test` para subir o `http-server` na porta 5500, aguardar a porta ficar disponível e então executar o Cypress. A API e o PostgreSQL devem estar rodando antes (via `docker compose up`).

### Diferença entre `npm run`, `npm test` e `npx`

- **`npm run <script>`**: Executa um script definido em `package.json` (ex: `npm run lint`, `npm run migrate`).
- **`npm test`**: Atalho para `npm run test`. Executa o script `test` definido no `package.json`.
- **`npx <pacote>`**: Executa um pacote sem instalá-lo globalmente (ex: `npx http-server`). Não lê scripts do `package.json`.

## Encerrar os Containers

Para parar e remover os containers do Docker:

```bash
docker compose down
```
