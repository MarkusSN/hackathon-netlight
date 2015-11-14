class Router extends React.Component {

  constructor() {
    super();
    this.state = { path: '' };
  }

  componentWillMount() {
    window.onhashchange = () => {
      var path = window.location.hash.split('#')[1] || '';
      this.setState({ path });
    };
  }

  // Decide view here
  render() {
    return <p>{this.state.path}</p>;
  }

}


module.exports = Router;
