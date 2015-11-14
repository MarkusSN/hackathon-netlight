module.exports = {
  promiseTweets: tags => Promise.all(tags.map(tag => fetch(`http://localhost:8080/tweet/${tag}`)))
};
