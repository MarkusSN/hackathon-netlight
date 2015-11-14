const { SET_HASHTAGS, START_FETCHING, RECEIVE_TWEETS } = require('./actions');
const { promiseTweets } = require('./restMethods');

const setHashTags = function(hashTags) {
  return { type: SET_HASHTAGS, hashTags };
};

const startFetching = function(hashTags) {
  return (dispatch) => {
    dispatch({ type: START_FETCHING });
    return promiseTweets(hashTags).then(
      (tweets) => dispatch(receiveTweets(tweets)),
      (fail) => console.log(fail)
    );
  };
};

const receiveTweets = function(tweets) {
  return { type: RECEIVE_TWEETS, tweets };
};

module.exports = {
  receiveTweets,
  startFetching,
  setHashTags
};
