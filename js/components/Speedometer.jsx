const Highcharts = require('react-highcharts/dist/bundle/highcharts');
require('react-highcharts/dist/more');
require('react-highcharts/dist/modules/solid-gauge');

class Speedometer extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.tweets != nextProps.tweets;
  }

  scoreInPercent(tweets) {
    var avg = tweets.reduce((acc, tweet) => acc + tweet.sentimentScore, 0) / tweets.length;
    return Math.floor(avg * 100);
   }

  render() {
    const { tweets, text } = this.props;
    if (tweets.length === 0) {
      return <div />;
    }
    let score = this.scoreInPercent(tweets);
    return <Highcharts className="col-lg-1-2 col-1-1" ref='highcharts' config={getConfig(score, text)} />;
  }

}

module.exports = Speedometer;

const getConfig = (score, text) => ({
  chart: {
    marginTop: -70,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    type: 'solidgauge'
  },
  title: { text, y: 30, style: { fontSize: 36 } },
  pane: {
    center: ['50%', '85%'],
    size: '100%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },
  tooltip: { enabled: false },
  yAxis: {
    stops: [
      [0.1, '#DF5353'], // red
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#55BF3B'] // green
    ],
    min: 0,
    max: 100,
    lineWidth: 0,
    minorTickInterval: null,
    tickPixelInterval: 400,
    tickWidth: 0,
    title: { y: -70 },
    labels: { y: 16 }
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  series: [{
    name: 'Luuv',
    data: [score], // SCORE GOES HERE
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:' +
      ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}%</span><br/>' +
      '<span style="font-size:12px;color:silver">Positivity</span></div>'
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: ' Positivity'
    }
  }]
});
