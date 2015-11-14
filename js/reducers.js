/* eslint-disable no-shadow */
const {
  SET_HASHTAGS,
  RECEIVE_TWEETS,
  START_FETCHING
} = require('./actions');

const initalState = {
  fetchStatus: 'not_fetching',
  hashTags: ['', ''],
  tweets: [[], []]
};

const hashTags = (hashTags, action) => {
  switch (action.type) {
    case SET_HASHTAGS: return action.hashTags;
    default: return hashTags;
  }
};

const tweets = (tweets, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS: return action.tweets;
    default: return tweets;
  }
};

const fetchStatus = (fetchStatus, action) => {
  switch (action.type) {
    case START_FETCHING: return 'fetching';
    case RECEIVE_TWEETS: return 'not_fetching';
    default: return fetchStatus;
  }
};

module.exports = function(state = initalState, action) {
  return {
    fetchStatus: fetchStatus(state.fetchStatus, action),
    hashTags: hashTags(state.hashTags, action),
    tweets: tweets(state.tweets, action)
  };
};
