import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TopFilmsList from './components/TopFilmsList';

export default class TopFilms extends Component {
  componentDidMount() {
    this.props.loadFilms();
  }

  addSelected(id) {
    this.props.addFilmToFavourites(id);
  }

  render() {
    const { films, isLoading, favourites } = this.props;
    // console.log('favourites', favourites);
    return (
      <View style={styles.container}>
        <TopFilmsList
          filmItems={films || []}
          favourites={favourites || []}
          isLoading={isLoading}
          addFilmToFavourites={this.addSelected.bind(this)}
        />
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
