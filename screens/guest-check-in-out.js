import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Header, FormLabel, FormInput, ButtonGroup } from 'react-native-elements';
import Numpad from '../components/numpad.js';

export default class CheckIn extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
    };
    this.deleteNum = this.deleteNum.bind(this);
    this.clear = this.clear.bind(this);
    this.numberPress = this.numberPress.bind(this);
  }

  deleteNum() {
    this.setState({ number: this.state.number.slice(0, this.state.number.length - 1) });
  }
  clear() {
    this.setState({ number: '' });
  }
  numberPress(number) {
    this.setState({ number: this.state.number + number });
  }

  render() {
    return (
      <View>
        <Header
          outerContainerStyles={{ height: 300 }}
          backgroundColor="#e9e9e9"
          centerComponent={{ text: 'Guest Check-In', style: { color: '#000', fontSize: 100 } }}
        />
        <FormLabel>Number</FormLabel>
        <FormInput
          keyboardType="number-pad"
          value={this.state.number}
          onChangeText={number => this.setState({ number })}
        />
        <Numpad clear={this.clear} deleteNum={this.deleteNum} numberPress={this.numberPress} />
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
