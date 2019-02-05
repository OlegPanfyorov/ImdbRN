import React, { Component } from 'react';
import { UIManager } from 'react-native';
//import SplashScreen from 'react-native-splash-screen';

import RootNavigation from './navigation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  componentDidMount() {
    //SplashScreen.hide();
  }

  render() {
    return <RootNavigation />;
  }
}
