const Highcharts = require('react-highcharts/dist/bundle/highcharts');
require('react-highcharts/dist/more');
require('react-highcharts/dist/modules/solid-gauge');

class Speedometer extends React.Component {

  constructor(props) {
    super(props);
  }

  score(tweets) {
    if (tweets.length === 0) {
      return 0;
    }
    return tweets.reduce((acc, tweet) => acc + tweet.sentimentScore, 0);
  }

  render() {
    let score = this.score(this.props.tweets);
    return <Highcharts ref='highcharts' config={getConfig(score)} />;
  }

}

module.exports = Speedometer;

const getConfig = (score) => ({
  chart: {
    type: 'solidgauge'
  },
  title: null,
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
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'] // red
    ],
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
      ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
      '<span style="font-size:12px;color:silver">Positivity</span></div>'
    },
    tooltip: {
      valueSuffix: ' Positivity'
    }
  }]
});
