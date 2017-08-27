import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class ProfileScreen extends Component {

  static navigationOptions = {
    title: '我的',
  };

  render() {
    return (
      <View>
        <Text>Hello, Profile Screen!</Text>
      </View>
    );
  }
}

export default ProfileScreen;