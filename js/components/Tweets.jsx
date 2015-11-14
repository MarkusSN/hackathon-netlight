const TweetList = require('./TweetList');

class Tweets extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TweetList tweets={this.props.tweets[0]}/>
        <TweetList tweets={this.props.tweets[1]}/>
      </div>
    );
  }

}

module.exports = Tweets;
