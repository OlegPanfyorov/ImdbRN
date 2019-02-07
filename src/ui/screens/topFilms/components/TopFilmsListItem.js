import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
const imdbIcon = require('../../../../assets/images/imdb_small.png');

export default class TopFilmsListItem extends Component {
  _renderImage(object) {
    return <Image source={{ uri: object.urlPoster }} style={styles.image} />;
  }

  render() {
    const {
      filmObject: { item },
    } = this.props;
    return item ? (
      <View style={styles.container}>
        <View style={styles.contentView}>
          {this._renderImage(item)}
          <View style={styles.descriptionView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{item.rating}</Text>
              <Image style={styles.imdbIcon} source={imdbIcon} />
            </View>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    ) : null;
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 164,
    flexDirection: 'column',
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionView: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    flexDirection: 'column',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  image: {
    width: 90,
    height: 134,
    alignContent: 'center',
    marginRight: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginRight: 15,
    color: 'white',
  },
  year: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
  imdbIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  rating: {
    fontSize: 22,
    color: 'yellow',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    opacity: 0.6,
    bottom: 0,
  },
});
