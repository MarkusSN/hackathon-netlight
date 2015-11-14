var Promise = require('promise');

module.exports = {

  promiseTweets(hashTags) {
    let ht1List = [{ text: 'dummy tweet for hashTag 1' }];
    let ht2List = [{ text: 'dummy tweet for hashTag 2' }];
    return new Promise.resolve([ht1List, ht2List]);
  }

};
