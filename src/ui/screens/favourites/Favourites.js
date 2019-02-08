import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import mockedMovies from '../../../api/mocks/films.json';
const { height, width } = Dimensions.get('window');
import Images from '../../../assets/images';

export default class Favourites extends Component {
  constructor() {
    super();
    const { data: { movies = [] } = {} } = mockedMovies;
    this.state = {
      entries: movies,
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.urlPoster }}
          style={{ width: '100%', height: '100%' }}
        />
        <TouchableOpacity style={styles.heartContainer} onPress={() => {}}>
          <Image
            style={{
              width: 44,
              height: 44,
            }}
            source={Images.heart_filled}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { entries } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={entries}
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
});
