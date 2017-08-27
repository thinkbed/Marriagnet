import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class SquareScreen extends Component {

  static navigationOptions = {
    title: '广场',
  };

  render() {
    return (
      <View>
        <Text>Hello, Square Screen!</Text>
      </View>
    );
  }
}

export default SquareScreen;