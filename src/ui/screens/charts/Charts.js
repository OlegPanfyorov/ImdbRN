import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const { width } = Dimensions.get('window');
const chartDimension = width - 30;

const data = {
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
  decimalPlaces: 0
};

export default class Charts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LineChart
          data={data}
          width={width}
          height={chartDimension}
          chartConfig={chartConfig}
          bezier
          style={{
            marginLeft: -40
          }}
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
});
