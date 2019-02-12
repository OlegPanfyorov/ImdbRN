import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import Carousel from 'react-native-snap-carousel';
import Images from '../../../assets/images';
import SimplePicker from 'react-native-simple-picker';
const { height, width } = Dimensions.get('window');
const pickerValues = ['Not sorted', 'By Title', 'By Year'];

export default class Favourites extends Component {
  constructor() {
    super();

    this.state = {
      currentValue: pickerValues[0],
    };
  }

  sortingSelected(value) {
    this.setState({
      currentValue: value,
    });
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <CachedImage source={{ uri: item.urlPoster }} style={styles.image} />
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={() => {
            this.props.removeFromFavourites(item.idIMDB);
          }}
        >
          <CachedImage style={styles.heartIcon} source={Images.heart_filled} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { favourites } = this.props;
    const { currentValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={favourites || []}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={width}
            itemWidth={width * 0.7}
            sliderHeight={height * 0.5}
            itemHeight={height * 0.5}
            removeClippedSubviews={false}
          />
        </View>
        <View style={styles.selectorContainer}>
          <Text
            style={styles.pickerText}
            onPress={() => {
              this.refs.picker.show();
            }}
          >
            {currentValue}
          </Text>
          <SimplePicker
            ref={'picker'}
            options={pickerValues}
            onSubmit={this.sortingSelected.bind(this)}
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
  selectorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    height: 100,
    alignItems: 'center',
  },
  pickerText: {
    marginTop: 70,
    marginHorizontal: 30,
    height: 30,
    color: 'white',
  },
});
