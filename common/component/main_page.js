import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DrawerPage from './drawer_navigation_page';

class ChatScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user} </Text>
      </View>
    );
  }
}

class RecentChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
          title='Chat with Lucy'
        />
      </View>
    );
  }
}

class AllChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
          title='Chat with Lucy'
        />
      </View>
    );
  }
}

const TabScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatsScreen},
  All: {screen: AllChatsScreen},
  Expoler: {screen: DrawerPage},
});

TabScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

export const MainPage = StackNavigator({
  Home: {screen: TabScreenNavigator},
  Chat: {screen: ChatScreen},
});

export default MainPage;