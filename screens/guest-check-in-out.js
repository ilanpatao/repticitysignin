import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Header } from 'react-native-elements';

export default class CheckIn extends React.Component {
  render() {
    return (
      <View>
        <Header
          outerContainerStyles={{ height: 300 }}
          backgroundColor="#e9e9e9"
          centerComponent={{ text: 'Guest Check-In', style: { color: '#000', fontSize: 100 } }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
