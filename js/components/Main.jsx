const HashTagsInput = require('./HashTagsInput');
const { setHashTags, startFetching, receiveTweets, awaitFetch } = require('../actionCreators');
const Speedometer = require('./Speedometer');
const Tweets = require('./Tweets');
const { promiseTweets } = require('../restMethods');

class Main extends React.Component {

  constructor(props) {
    super(props);
  }


	render() {
    const { hashTags, tweets, dispatch } = this.props;
    const { fetchStatus } = this.state;
		return (
			<div>
        <HashTagsInput hashTags={hashTags} hashTagsOnChange={(hts) => dispatch(setHashTags(hts))} />
        <button disabled={fetchStatus !== 'not_fetching'} onClick={}>Hent</button>
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
