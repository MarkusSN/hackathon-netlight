const { SET_HASHTAGS, START_FETCHING, AWAIT_FETCH } = require('./actions');

module.exports = {

  setHashTags(hashTags) {
    return { type: SET_HASHTAGS, hashTags };
  },

  awaitFetch() {
    return { type: AWAIT_FETCH };
  },

  startFetching() {
    return { type: START_FETCHING };
  },

  receiveTweets(tweets) {
    return { type: RECEIVE_TWEETS, tweets };
  }

};
