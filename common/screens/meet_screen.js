import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class MeetScreen extends Component {

  static navigationOptions = {
    title: '遇见',
  };

  render() {
    return (
      <View>
        <Text>Hello, Meet Screen!Will use swiper.</Text>
      </View>
    );
  }
}

export default MeetScreen;