const express = require('express');
const app = express();
const Twitter = require('twitter-node-client').Twitter;

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

const washTweet = (tweet) => {
  return {
    id: tweet.id,
    text: tweet.text,
    user: {
      id: tweet.user.id,
      name: tweet.user.name,
      twitterHandle: tweet.user.screen_name,
      profileImageUrl: tweet.user.profile_image_url
    }
  };
};
