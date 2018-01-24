import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Header } from 'react-native-elements';

export default class CheckIn extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
    };
  }

  render() {
    return (
      <View>
        <Header
          outerContainerStyles={{ height: 300 }}
          backgroundColor="#e9e9e9"
          centerComponent={{ text: 'Guest Check-In', style: { color: '#000', fontSize: 100 } }}
        />
        <TextInput
          keyboardType="number-pad"
          autoFocus
          onChangeText={number => this.setState({ number })}
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
