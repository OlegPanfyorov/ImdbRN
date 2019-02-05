import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Charts extends Component {
  componentDidMount() {
    // this.props.loadFilms()
  }
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
