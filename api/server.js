import app from './app.js';
import { pool } from './db.js';

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`API disponível em http://localhost:${PORT}`);
});

async function encerrarServidor() {
  console.log('\nEncerrando servidor...');

  server.close(async () => {
    try {
      await pool.end();
      console.log('Conexões encerradas.');
      process.exit(0);
    } catch (error) {
      console.error('Erro ao encerrar conexões:', error);
      process.exit(1);
    }
  });
}

process.on('SIGINT', encerrarServidor);
process.on('SIGTERM', encerrarServidor);

