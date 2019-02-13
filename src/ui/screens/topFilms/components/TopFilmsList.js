import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Dimensions, Text } from 'react-native';
import TopFilmsListItem from './TopFilmsListItem';
const { width } = Dimensions.get('window');

const EmptyComponent = ({ title }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>{title}</Text>
  </View>
);

export default class TopFilmsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {}

  _keyExtractor(item) {
    return `${item.idIMDB}`;
  }

  _renderItem = item => {
    const { favourites } = this.props;
    const existInFavourite = favourites.find(object => {
      return object.idIMDB === item.item.idIMDB;
    });
    return (
      <TopFilmsListItem
        id={item.idIMDB}
        filmObject={item}
        isFavourite={existInFavourite}
        favouriteSelected={value => {
          if (existInFavourite) {
            this.props.removeFilmFromFavourites(value);
          } else {
            this.props.addFilmToFavourites(value);
          }
        }}
      />
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const { isLoading, filmItems } = this.props;
    return (
      <FlatList
        ref="flatList"
        style={styles.container}
        data={filmItems}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        extraData={filmItems}
        // showsVerticalScrollIndicator={0}
        ListEmptyComponent={<EmptyComponent title="No films" />}
        refreshing={isLoading}
        contentContainerStyle={{ flexGrow: 1 }}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    marginHorizontal: 15,
    backgroundColor: '#0E1D39',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 25,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: 'gray',
    marginLeft: '5%',
  },
});
