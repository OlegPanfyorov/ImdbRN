import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Dimensions, Text } from 'react-native';
import TopFilmsListItem from './TopFilmsListItem';

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
    return <TopFilmsListItem id={item.idIMDB} filmObject={item} favouriteSelected={(value)=>{
      this.props.addFilmToFavourites(value)
    }}  />;
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
        showsVerticalScrollIndicator={0}
        ListEmptyComponent={
          <EmptyComponent title="No films" />
        }
        refreshing={isLoading}
        contentContainerStyle={{ flexGrow: 1 }}
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
    fontSize: 25
  }
});
