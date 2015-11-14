const app = require('express')();
const Twitter = require('twitter-node-client').Twitter;
const washTweet = require('./washTweet');
const sentimentCalculator = require('./sentiment');

const config = {
   consumerKey: 'LTXOmvPl8OetOsCXlnA',
   consumerSecret: 'DnCztfgOKZErfRft272aALza7vjxFzM4uD1bVfk6Uww',
   accessToken: '81796976-Bkl5tBxaC9V8e0IfYPqyx5wU8aI8rBaOm0yVGCOO5',
   accessTokenSecret: 'PeQTaocGs9ZZT22zeNt3vpMDi2PdteQewdQ2kXYw',
   callBackUrl: 'localhost:8080'
};

const twitter = new Twitter(config);

app.post('/tweet', (req, res) => {
  twitter.getSearch({ q: req.body, count: 10 }, success, success.bind(res));
});

app.listen(8080);

const success = function (data) {
  console.log(data.statuses);
  const statuses = JSON.parse(data).statuses;
  statuses.forEach( (tweet, i) => console.log(i + ': ' + tweet.text));
  this.send(statuses.map(washTweet));
};
