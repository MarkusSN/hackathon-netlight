module.exports = (tweet) => {
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
