import React, { Component } from 'react';
import { View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TopFilms from '../ui/screens/topFilms';
import Charts from '../ui/screens/charts';
import Favourites from '../ui/screens/favourites';
import WebViewComponent from '../ui/screens/webView';
import topFilms from '../ui/screens/topFilms';

const FilmsStack = createStackNavigator({
  TopFilms: {
    screen: TopFilms,
    navigationOptions: () => ({
      title: 'Top Films',
      header: null,
    }),
  },
  WebView: {
    screen: WebViewComponent,
    navigationOptions: () => ({
      title: '',
      headerStyle: {
        backgroundColor: '#0E1D39',
      },
      headerTintColor: 'white'
    }),
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    TopFilms: FilmsStack,
    Charts: {
      screen: Charts,
    },
    Favourites: {
      screen: Favourites,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#435672',
        style: {
          backgroundColor: '#0E1E37',
        },
        showLabel: false,
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'TopFilms') {
          iconName = `ios-list-box`;
        } else if (routeName === 'Charts') {
          iconName = `ios-pie`;
        } else if (routeName === 'Favourites') {
          iconName = `ios-ribbon`;
        }
        return (
          <IconComponent
            name={iconName}
            size={25}
            color={tintColor}
            style={{ marginTop: 5 }}
          />
        );
      },
    }),
  },
);

export default createAppContainer(TabNavigator);
