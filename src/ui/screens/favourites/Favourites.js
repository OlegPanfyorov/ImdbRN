import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import Carousel from 'react-native-snap-carousel';
import Images from '../../../assets/images';
const { height, width } = Dimensions.get('window');

export default class Favourites extends Component {
  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <CachedImage source={{ uri: item.urlPoster }} style={styles.image} />
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={()=>{
            this.props.removeFromFavourites(item.idIMDB)
          }}
        >
          <CachedImage style={styles.heartIcon} source={Images.heart_filled} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { favourites } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={favourites || []}
            // style={styles.carousel}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={width}
            itemWidth={width * 0.7}
            sliderHeight={height * 0.5}
            itemHeight={height * 0.5}
            removeClippedSubviews={false}
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
