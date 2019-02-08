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

  favouriteSelected() {
    const {
      filmObject: {
        item: { isFavourite = 0 },
      },
      favouriteSelected
    } = this.props;
    
    favouriteSelected()
    if (!isFavourite) this.playFavouriteAnimation();
  }

  playFavouriteAnimation() {
    this.springValue.setValue(1);
    Animated.sequence([
      Animated.spring(this.springValue, {
        toValue: 1.2,
        friction: 1
      }),
      Animated.spring(this.springValue, {
        toValue: 1
      }),
    ]).start();
  }

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
              <Image style={styles.imdbIcon} source={Images.imdb_small} />
            </View>
          </View>
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
            source={item.isFavourite ? Images.heart_filled : Images.heart_empty}
          />
        </TouchableOpacity>
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
    marginTop: 10,
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
    color: '#FFD236',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    opacity: 0.6,
    bottom: 0,
  },
  heartContainer: {
    position: 'absolute',
    width: 44,
    height: 44,
    bottom: 15,
    right: 10,
  },
});
