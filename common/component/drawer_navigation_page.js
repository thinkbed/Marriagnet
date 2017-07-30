import React, { Component } from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends Component {

	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../../image/chats-icon.png')}
				style={[style.icon, {tintColor: tintColor}]}
			/>
		),
	};

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
		);
	}
}

class MyNotificationsScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../../image/notif-icon.png')}
				style={[style.icon, {tintColor: tintColor}]}
			/>
		),
	};

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.goBack()}
				title="Go back home"
			/>
		);
	}
}

const style = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});

export const DrawerPage = DrawerNavigator({
	Home: {
		screen: MyHomeScreen,
	},
	Notifications: {
		screen: MyNotificationsScreen,
	},
});

export default DrawerPage;