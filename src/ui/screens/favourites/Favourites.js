import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import Carousel from 'react-native-snap-carousel';
import Images from '../../../assets/images';
import SimplePicker from 'react-native-simple-picker';
const { height, width } = Dimensions.get('window');
const pickerValues = ['Not sorted', 'By Title', 'By Year'];

export default class Favourites extends Component {
  constructor(props) {
    super();
    if (!props.currentSortingValue) {
      props.updateSorting(pickerValues[0]);
    }
  }

  sortingSelected(value) {
    const { updateSorting } = this.props;
    updateSorting(value);
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <CachedImage source={{ uri: item.urlPoster }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
            <Image style={styles.imdbIcon} source={Images.imdb_small} />
          </View>
        </View>
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
    const { favourites, currentSortingValue } = this.props;
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
            {currentSortingValue}
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
  infoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 74,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 14,
    marginHorizontal: 15,
    marginTop: 10,
    color: 'white',
  },
  year: {
    fontSize: 12,
    marginTop: 5,
    marginHorizontal: 15,
    color: 'gray',
  },
  imdbIcon: {
    width: 14,
    height: 14,
    marginLeft: 10,
  },
  rating: {
    fontSize: 12,
    color: '#FFD236',
  },
});
