import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import {Action, Router, Scene, Stack} from 'react-native-router-flux';

import Login from './src2/component/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor='#1c313a'
        barStyle='light-content'
      />
      <Login/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
