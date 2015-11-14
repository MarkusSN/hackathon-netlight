const HashTagsInput = require('./HashTagsInput');
const { setHashTags, startFetching, receiveTweets, awaitFetch } = require('../actionCreators');
const Speedometer = require('./Speedometer');
const Tweets = require('./Tweets');

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
    const { hashTags, tweets, dispatch, fetchStatus } = this.props;
		return (
			<div>
                <h1>What does Twitter love more??</h1>
        <HashTagsInput hashTags={hashTags} hashTagsOnChange={(hts) => dispatch(setHashTags(hts))} />
        <button className="get-tweets-button" onClick={() => dispatch(startFetching(hashTags))}>Hent</button>
        <Speedometer />
        <Tweets tweets={tweets} />
			</div>
		);
	}
}

const select = (state) => {
  return {
    fetchStatus: state.fetchStatus,
    hashTags: state.hashTags,
    tweets: state.tweets
  };
};

module.exports = require('react-redux').connect(select)(Main);
