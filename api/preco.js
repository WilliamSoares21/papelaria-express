export function formatarPreco(valor) {
  const numero = Number(valor);

  if (!Number.isFinite(numero)) {
    throw new TypeError('O preço informado é inválido.');
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numero);
}

