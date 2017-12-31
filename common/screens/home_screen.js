import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TextInput, Alert, Button, AppRegistry, Image, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {List, ListItem} from 'react-native-elements';

import LoginScreen from './login_screen';

var image1 = require('../../images/image11.jpeg')
var image2 = require('../../images/image10.jpeg')
var image3 = require('../../images/image9.jpeg')
var image4 = require('../../images/image8.jpeg')
var image5 = require('../../images/image7.jpeg')
var image6 = require('../../images/image6.jpeg')
var image7 = require('../../images/image5.jpeg')
var image8 = require('../../images/image4.jpeg')
var image9 = require('../../images/image3.jpeg')
var image10 = require('../../images/image2.jpeg')
var image11 = require('../../images/image1.jpeg')

class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [{
  "id": 1,
  "first_name": "Gina",
  "last_name": "Hill",
  "tweet": "Phasellus sit ag lorem, vitae mattis elit.",
  "time": "9:48 AM",
  image: image1,
}, {
  "id": 2,
  "first_name": "Marta",
  "last_name": "Little",
  "tweet": "Vivamus tortor. D sollicitudin ut, suscipitique. Fusce con sed augue.",
  "time": "8:39 PM",
  image: image2,
}, {
  "id": 3,
  "first_name": "Christy",
  "last_name": "Powell",
  "tweet": "Integer pede justo, lacinia eget, tinciduntet, sem. Fusce consequat. Nulla nisl. Nunc n",
  "time": "8:01 AM",
  image: image3,
}, {
  "id": 4,
  "first_name": "Cynthia",
  "last_name": "Nichols",
  "tweet": "Donec quis orci eget orndimentum. Curabitur in libert. Nulla tempus.",
  "time": "3:36 AM",
  image: image4,
}, {
  "id": 5,
  "first_name": "Maria",
  "last_name": "Harrison",
  "tweet": "Ut at dolor quis odio consequat varius. Integer ac let ac nulla.",
  "time": "9:34 AM",
  image: image5
}, {
  "id": 6,
  "first_name": "Ana",
  "last_name": "Porter",
  "tweet": "Donec odit sapien arcu sed augue. Aliquam erat volutpat.",
  "time": "3:09 PM",
  image: image6
}, {
  "id": 7,
  "first_name": "Clara",
  "last_name": "Bennett",
  "tweet": "Mauris.",
  "time": "8:04 PM",
  image: image7
}, {
  "id": 8,
  "first_name": "Brenda",
  "last_name": "Rogers",
  "tweet": "ellentesque.",
  "time": "12:46 PM",
  image: image8
}, {
  "id": 9,
  "first_name": "Annie",
  "last_name": "Daniels",
  "tweet": "Phasellus sit ulla ac enim. In tempor, turpis nec euismod scelerisque, qt.",
  "time": "9:35 PM",
  image: image9
}, {
  "id": 10,
  "first_name": "Bri",
  "last_name": "Franklin",
  "tweet": "Nullanisi vulputate nonummy. Maecenas tincidunt lacusvelit. Vivamus rus.",
  "time": "11:22 AM",
  image: image10
}],
  logined: false  }

  this.onLoginStateChanged = this.onLoginStateChanged.bind(this);
  }

  static navigationOptions = {
    title: '推荐',
  };

  onLoginStateChanged(is_logined)
  {
    this.setState({logined:is_logined});  
  }

  render() {
    return (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity>
              <ListItem
                title={`${item.first_name} ${item.last_name}`}
                subtitle={
                  <View>
                    <Image source={item.image} style={styles.ratingImage}/>
                    <Text>{item.tweet}</Text>
                  </View>
                }
                avatar={item.image}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </List>
    );
    
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    margin:40,
    height: 200,
    width: 150
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default HomeScreen;