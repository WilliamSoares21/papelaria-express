const API_URL = 'http://localhost:3001/produtos';

const listaProdutos = document.getElementById('products-list');
const mensagemErro = document.getElementById('error-message');

async function buscarProdutos() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  return await resposta.json();
}

function exibirProdutos(produtos) {
  listaProdutos.replaceChildren();

  produtos.forEach((produto) => {
    const item = document.createElement('li');

    const nome = document.createElement('span');
    nome.textContent = produto.nome;

    const preco = document.createElement('strong');
    preco.textContent = produto.preco;

    item.append(nome, preco);

    listaProdutos.appendChild(item);
  });
}

async function carregarProdutos() {
  try {
    mensagemErro.hidden = true;

    const produtos = await buscarProdutos();

    exibirProdutos(produtos);
  } catch (error) {
    listaProdutos.replaceChildren();

    mensagemErro.textContent =
      'Não foi possível carregar os produtos. Tente novamente mais tarde.';

    mensagemErro.hidden = false;

    console.error('Erro ao carregar produtos:', error);
  }
}

carregarProdutos();

