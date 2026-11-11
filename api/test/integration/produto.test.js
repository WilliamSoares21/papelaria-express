import { after, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';

import app from '../../app.js';
import { pool } from '../../db.js';

describe('API de produtos', () => {
  after(async () => {
    await pool.end();
  });

  it('deve retornar os três produtos cadastrados', async () => {
    const resposta = await request(app)
      .get('/produtos');

    assert.equal(resposta.status, 200);

    assert.equal(resposta.body.length, 3);

    assert.deepEqual(
      resposta.body.map(({ nome, preco }) => ({ nome, preco })),
      [
        { nome: 'Caderno', preco: 'R$ 19,90' },
        { nome: 'Caneta', preco: 'R$ 4,50' },
        { nome: 'Mochila', preco: 'R$ 89,90' }
      ]
    );
  });

  it('deve verificar a conexão com o banco', async () => {
    const resposta = await request(app)
      .get('/health');

    assert.equal(resposta.status, 200);
    assert.deepEqual(resposta.body, { ok: true });
  });
});

