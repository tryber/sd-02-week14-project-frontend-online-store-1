const fetch = require('node-fetch');

async function pesquisarItem(item) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const resposta = await fetch(URL);
  const data = await resposta.json();
  return data.results;
}

module.exports = pesquisarItem;
