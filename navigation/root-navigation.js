import { Notifications } from 'expo';
import React from 'react';
import StatusBar from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home-screen.js';
import CheckIn from '../screens/guest-check-in-out.js';
import CheckOut from '../screens/guest-check-out.js';
import Name from '../screens/name.js';
const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: Home,
    },
    CheckIn: {
      screen: CheckIn,
    },
    CheckOut: {
      screen: CheckOut,
    },
    Name: {
      screen: Name,
    },
  },
  {
    navigationOptions: () => ({
      headerStyle: {
        height: 5,
        backgroundColor: '#e9e9e9',
      },
      statusBarStyle: 'light-content',
    }),
  }
);

export default class RootNavigator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    //  this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }
}
