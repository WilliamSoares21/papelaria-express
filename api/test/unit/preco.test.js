import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { formatarPreco } from '../../preco.js';

describe('formatarPreco', () => {
  it('deve formatar 19.9 como R$ 19,90', () => {
    assert.equal(formatarPreco(19.9), 'R$ 19,90');
  });

  it('deve formatar 4.5 como R$ 4,50', () => {
    assert.equal(formatarPreco(4.5), 'R$ 4,50');
  });

  it('deve aceitar valores numéricos em formato string', () => {
    assert.equal(formatarPreco('89.90'), 'R$ 89,90');
  });

  it('deve rejeitar valores inválidos', () => {
    assert.throws(() => formatarPreco('abc'), TypeError);
  });
});

