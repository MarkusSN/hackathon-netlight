var Loader = require('react-loader');

class Spinner extends React.Component {

	constructor() {
		super();
	}

	render() {
		const activeClass = 'spinner-container' + (this.props.active ? ' active' : '');
		return (
			<div className={activeClass}>
				<Loader loaded={!this.props.active} options={this.options()} className="spinner"/>
			</div>
		);
	}

  options() {
		return {
			lines: 13,
			length: 20,
			width: 10,
			radius: 30,
			corners: 1,
			rotate: 0,
			direction: 1,
			color: '#000',
			speed: 1,
			trail: 60,
			shadow: false,
			hwaccel: false,
			zIndex: 2e9,
			top: '50%',
			left: '50%',
			scale: 1.00
		};
	}
}

module.exports = Spinner;
