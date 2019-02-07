import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TopFilmsList from './components/TopFilmsList'

export default class TopFilms extends Component {
  componentDidMount() {
    this.props.loadFilms();
  }
  render() {
    const { films, isLoading } = this.props;
    return (
      <View style={styles.container}>
        <TopFilmsList filmItems={films} isLoading={isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1D39',
  },
});
