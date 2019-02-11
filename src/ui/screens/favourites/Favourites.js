import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import Carousel from 'react-native-snap-carousel';
const { height, width } = Dimensions.get('window');
import Images from '../../../assets/images';

export default class Favourites extends Component {
  removeFromFavourites(item) {
    this.props.removeFromFavourites();
  }
  
  _renderItem = item => {
    return (
      <View style={{ flex: 1 }}>
        <CachedImage source={{ uri: item.urlPoster }} style={styles.image} />
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={this.removeFromFavourites().bind(this)}
        >
          <CachedImage style={styles.heartIcon} source={Images.heart_filled} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { favourites } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={favourites || []}
            // style={styles.carousel}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width * 0.7}
            sliderHeight={height * 0.5}
            itemHeight={height * 0.5}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1D39',
  },
  carouselContainer: {
    marginTop: height * 0.25,
    marginLeft: 0,
    marginRight: 0,
    height: height * 0.5,
  },
  imageContainer: {
    height: 300,
    width: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
  },
  heartContainer: {
    position: 'absolute',
    width: 44,
    height: 44,
    bottom: 15,
    right: 10,
  },
  heartIcon: {
    width: 44,
    height: 44,
  },
});
