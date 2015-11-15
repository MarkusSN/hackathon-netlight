const HashTagsInput = require('./HashTagsInput');
const { setHashTags, startFetching, receiveTweets, awaitFetch } = require('../actionCreators');
const Speedometer = require('./Speedometer');
const Tweets = require('./Tweets');
const Spinner = require('./Spinner');

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
        <div className="col-1-1">
                <button className="get-tweets-button" onClick={() => dispatch(startFetching(hashTags))}>Hent</button>
        </div>
        <Speedometer text={hashTags[0]} tweets={tweets[0]} />
        <Speedometer text={hashTags[1]} tweets={tweets[1]} />
        <Tweets tweets={tweets} />
        <Spinner active={fetchStatus === 'fetching'}/>
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
