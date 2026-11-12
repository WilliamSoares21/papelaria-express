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
npx http-server frontend -p 5500 -c-1
```

**Usando Python 3 (nativo no Linux):**

```bash
cd frontend
python3 -m http.server 5500
```

Depois, abra o navegador em: `http://localhost:5500`

---

## Comandos Úteis (Desenvolvimento e Testes)

Caso queira rodar os scripts da API localmente (dentro da pasta `api/`):

```bash
cd api
npm install              # Instala as dependências
npm run migrate          # Cria a tabela e insere os produtos iniciais
npm run lint             # Verifica a padronização do código com ESLint
npm test                 # Executa os testes unitários
npm run test:integration # Executa os testes de integração com o banco
```

## Encerrar os Containers

Para parar e remover os containers do Docker:

```bash
docker compose down
```
