class TweetList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      let { tweets } = this.props;
      tweets = tweets.map(function(tweet) {
          if (tweet.sentimentScore > 0.8) {
              tweet.image = "images/love.png";
          }else if (tweet.sentimentScore > 0.6) {
              tweet.image = "images/happy.png";
          }else if (tweet.sentimentScore > 0.4) {
              tweet.image = "images/bad.png";
          } else {
              tweet.image = "images/mad.png";
          }
          return tweet;
      }); 
  
    return (
        <ul className="col-lg-1-2 col-1-1">
                            {tweets.map((tweet) =>
        <li className="tweet-container" key={tweet.id}>
            <div className="col-1-4">
                <img className="tweet-sentiment-image" src={tweet.image} alt="" />
            </div>
            <div className="col-3-4">
                <h3><a href={`https://twitter.com/${tweet.user.twitterHandle}`} className="twitter-handle" target="_blank">{'@' + tweet.user.twitterHandle}</a></h3>
                <p>{tweet.text}</p>
            </div>

        </li>)}
                        </ul>
    );
  }

}

module.exports = TweetList;
