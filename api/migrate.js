import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

if (!process.env.DIRECT_URL) {
  throw new Error('DIRECT_URL não foi configurada.');
}

const pool = new Pool({
  connectionString: process.env.DIRECT_URL
});

async function migrate() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        nome TEXT NOT NULL UNIQUE,
        preco NUMERIC(10, 2) NOT NULL
      );
    `);

    await pool.query(`
      INSERT INTO produtos (nome, preco)
      VALUES
        ('Caderno', 19.90),
        ('Caneta', 4.50),
        ('Mochila', 89.90)
      ON CONFLICT (nome) DO NOTHING;
    `);

    console.log('Banco de dados preparado com sucesso!');
  } catch (error) {
    console.error('Erro ao preparar o banco:', error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

migrate();

