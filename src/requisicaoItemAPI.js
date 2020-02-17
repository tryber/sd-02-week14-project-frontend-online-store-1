const fetch = require('node-fetch');

async function pesquisarItem() {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=cup'
    const resposta = await fetch(URL);
    const data = await resposta.json();
    return data.results;
}

pesquisarItem();

module.exports = pesquisarItem;