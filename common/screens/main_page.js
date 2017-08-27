import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './home_screen';
import MeetScreen from './meet_screen';
import SquareScreen from './square_screen';
import MessageScreen from './message_screen';
import ProfileScreen from './profile_screen';

const MainPage = TabNavigator({
  首页: {screen: HomeScreen},
  遇见: {screen: MeetScreen},
  广场: {screen: SquareScreen},
  消息: {screen: MessageScreen},
  我的: {screen: ProfileScreen},
},
  {
    tabBarPosition: 'bottom',
  }
);

export default MainPage;