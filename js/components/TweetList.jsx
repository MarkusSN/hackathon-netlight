class TweetList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { tweets } = this.props;
    return (
      <ul>
        {tweets.map((tweet) => <li key={tweet.id}>{tweet.text}</li>)}
      </ul>
    );
  }

}

module.exports = TweetList;
