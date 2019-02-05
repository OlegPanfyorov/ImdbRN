import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class TopFilms extends Component {
  componentDidMount() {
    this.props.loadFilms()
  }
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1E38',
  },
});
