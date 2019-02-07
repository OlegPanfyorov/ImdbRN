import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Dimensions, Text } from 'react-native';
import TopFilmsListItem from './TopFilmsListItem';

const { height, width } = Dimensions.get('window');

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
    return <TopFilmsListItem id={item.idIMDB} filmObject={item} />;
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
        ListEmptyComponent={
          <EmptyComponent title="Nothing here, come back later.." />
        }
        refreshing={isLoading}
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
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e7e7e7',
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
