const Menu = require('./Menu');
const Header = require('./Header');
const Router = require('./Router');

class Main extends React.Component {

	render() {
    const { state } = this.props;
		return (
			<div>
				<Header />
        <Menu />
        <Router state={state}/>
			</div>
		);
	}
}

const select = (state) => ({ state });

module.exports = require('react-redux').connect(select)(Main);
