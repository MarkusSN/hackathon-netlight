var promiseTweets = (tags) => Promise.all(tags.map(fetchTag));

var fetchTag = (tag) => fetch(`http://localhost:8080/tweet/${encodeURIComponent(tag)}`).then((res) => res.json());

module.exports = {
  promiseTweets
};
