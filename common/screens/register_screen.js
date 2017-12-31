import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Alert, Button, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class RegisterScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      email: ''
    };
  }

  onRegisterPressed = () => 
  {
    fetch('http://www.marriagnet.com/account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${this.state.username}&password=${this.state.password}`
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
 
    <View style={styles.MainContainer}>
 
        <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>注册</Text>
  
        <TextInput
          placeholder="用户名"
          onChangeText={username => this.setState({username})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          placeholder="邮箱"
          onChangeText={email => this.setState({email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          placeholder="密码"
          onChangeText={password => this.setState({password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
 
        <Button title="注册" onPress={this.onRegisterPressed} color="#2196F3" />
 
    </View>
            
    );
  }

  static navigationOptions = {
    title: '注册',
  };


}

const styles = StyleSheet.create({

MainContainer: {
    justifyContent: 'center',
    flex:1,
    margin:10
},

TextInputStyleClass: {
    textAlign: 'center',
    marginBottom:7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5
}
});


export default RegisterScreen;
