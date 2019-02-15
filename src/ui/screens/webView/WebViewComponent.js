import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');

export default class WebViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    const {
      navigation: {
        state: {
          params: { url = '' },
        },
      },
    } = this.props;
    // console.log(navigation);
    return (
      <View style={styles.container}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={styles.webView}
          source={{ uri: url }}
        />
        {this.state.visible && (
          <ActivityIndicator style={styles.indicatorStyle} size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  indicatorStyle: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
