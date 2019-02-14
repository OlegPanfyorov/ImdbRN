import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Images from '../../../../assets/images';

export default class TopFilmsListItem extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(1);
  }

  directorSelected() {
    const {
      filmObject,
      directorSelected,
    } = this.props;
    directorSelected(filmObject)
  }

  favouriteSelected() {
    const {
      filmObject: {
        item: { idIMDB },
      },
      isFavourite,
    } = this.props;
    this.props.favouriteSelected(idIMDB);
    if (!isFavourite) this.playFavouriteAnimation();
  }

  playFavouriteAnimation() {
    this.springValue.setValue(1);
    Animated.sequence([
      Animated.spring(this.springValue, {
        toValue: 1.2,
        friction: 1,
      }),
      Animated.spring(this.springValue, {
        toValue: 1,
      }),
    ]).start();
  }

  _renderImage(object) {
    return (
      <Image
        source={{ uri: object.urlPoster }}
        style={styles.image}
        resizeMode={'contain'}
      />
    );
  }

  render() {
    const {
      filmObject: { item },
      isFavourite,
    } = this.props;

    const genres = item.genres.join(', ');
    const countries = item.countries.join(', ');
    const directors = item.directors.map(director => director.name).join(', ');
    return item ? (
      <View style={styles.container}>
        {this._renderImage(item)}
        <View style={styles.contentView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
            <Image style={styles.imdbIcon} source={Images.imdb_small} />
          </View>
          <Text style={styles.genre}>{genres}</Text>
          <Text style={styles.country}>{countries}</Text>
          <TouchableOpacity onPress={this.directorSelected.bind(this)}>
            <Text style={styles.directors}>{directors}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={this.favouriteSelected.bind(this)}
        >
          <Animated.Image
            style={{
              width: 44,
              height: 44,
              transform: [{ scale: this.springValue }],
            }}
            source={isFavourite ? Images.heart_filled : Images.heart_empty}
          />
        </TouchableOpacity>
      </View>
    ) : null;
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 134,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  contentView: {
    flex: 1,
    flexDirection: 'column',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontSize: 22,
    color: 'white',
    marginTop: 15,
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
    color: '#FFD236',
  },
  genre: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
    marginRight: 70,
  },
  country: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
    marginRight: 70,
  },
  directors: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    marginRight: 70,
    marginBottom: 15,
  },
  heartContainer: {
    position: 'absolute',
    width: 44,
    height: 44,
    bottom: 15,
    right: 10,
  },
});
