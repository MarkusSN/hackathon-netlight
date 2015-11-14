const fetch = require('node-fetch');
const SENTIMENT_API_URL = 'https://apiv2.indico.io/sentimenthq/batch?key=3fdb91c58429a165d959bfebb7699a2b';

module.exports = (texts) => {
  const config = { method: 'post', body: JSON.stringify({ data: texts }) };
  return fetch(SENTIMENT_API_URL, config).then(response => response.json()).then(json => json.results);
};
