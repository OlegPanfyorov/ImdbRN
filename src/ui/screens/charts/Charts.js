import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const { width } = Dimensions.get('window');
const chartDimension = width - 30;

let data = {
  labels: ['1970', '1980', '1990', '2000', '2010', '2020'],
  datasets: [
    {
      data: [12, 14, 16, 4, 7, 3],
      color: () => `rgba(255,210,54, 0.8)`,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#0E1D39',
  backgroundGradientTo: '#0E1D39',
  color: () => `rgba(255,255,255, 0.8)`,
  decimalPlaces: 0,
};

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [{ data: [] }],
      },
    };
  }

  componentWillMount() {
    const filtered = this.filterByDecades();
    const filteredLabels = Object.keys(filtered);
    const filteredCounters = Object.values(filtered).map(array => array.length);
    this.setState({
      chartData: {
        labels: filteredLabels,
        datasets: [
          { data: filteredCounters, color: () => `rgba(255,210,54, 0.8)` },
        ],
      },
    });
  }

  filterByDecades() {
    let decades = {};
    this.props.chartData.forEach(film => {
      const decade = Math.floor(film.year / 10) * 10;
      decades[decade] = [...(decades[decade] || []), film];
    });
    return decades;
  }

  render() {
    const { chartData } = this.state;
    console.log(chartData);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Film Releases - By Decade</Text>
        <LineChart
          data={chartData}
          width={width}
          height={chartDimension}
          chartConfig={chartConfig}
          bezier
          style={styles.chartStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1D39',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartStyle: {
    marginLeft: -40,
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    color: 'white'
  },
});
