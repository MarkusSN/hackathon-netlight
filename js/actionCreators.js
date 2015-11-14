const { SET_HASHTAGS, START_FETCHING } = require('./actions');
const { promiseTweets } = require('./restMethods');

module.exports = {

  setHashTags(hashTags) {
    return { type: SET_HASHTAGS, hashTags };
  },

  startFetching(hashTags) {
    return (dispatch) => {
      return promiseTweets(hashTags).then(
        (tweet) => dispatch(receiveTweets(tweets)),
        (fail) => console.log(fail)
      );
    };
  },

  receiveTweets(tweets) {
    return { type: RECEIVE_TWEETS, tweets };
  }

};
