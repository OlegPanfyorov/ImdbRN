import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopFilmsList from './components/TopFilmsList';

export default class TopFilms extends Component {
  // static navigationOptions = { title: 'Top Films', header: { visible: false } };

  componentDidMount() {
    this.props.loadFilms();
  }

  addSelected(id) {
    this.props.addFilmToFavourites(id);
  }

  removeSelected(id) {
    this.props.removeFilmFromFavourites(id);
  }

  directorSelected(directorId) {

    const fullUrl = 'https://www.imdb.com/name/' + `${directorId}`
    console.log(fullUrl)
    this.props.navigation.navigate('WebView', {url: fullUrl})
  }

  render() {
    const { films, isLoading, favourites } = this.props;
    // console.log('favourites', favourites);
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top Films</Text>
        </View>
        <TopFilmsList
          filmItems={films || []}
          favourites={favourites || []}
          isLoading={isLoading}
          addFilmToFavourites={this.addSelected.bind(this)}
          removeFilmFromFavourites={this.removeSelected.bind(this)}
          directorSelected={this.directorSelected.bind(this)}
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
  titleContainer: {
    height: 44,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    top: 44,
    fontSize: 24,
    color: 'white',
  },
});
