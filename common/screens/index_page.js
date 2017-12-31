import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MainPage from './main_page';
import LoginScreen from './login_screen';
import RegisterScreen from './register_screen';

class IndexScreen extends Component {

  constructor(props){
    super(props);
  }

  render() {
  	return(
  	<View style={{flex:1, flexDirection: 'column', justifyContent:'center'}}>
  		<Button title="游客浏览" onPress={()=> this.props.navigation.navigate('Main')}/>
	    <Button title="登录" onPress={()=> this.props.navigation.navigate('Login')}/>
	    <Button title="注册" onPress={()=> this.props.navigation.navigate('Register')}/>
	</View>);
  	
  }
}

export const IndexPage = StackNavigator({
  Index: {screen: IndexScreen},
  Main: {screen: MainPage},
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen}
});

export default IndexPage;