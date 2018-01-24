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
      index: 0,
      numberArray: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    };

    this.deleteNum = this.deleteNum.bind(this);
    this.clear = this.clear.bind(this);
    this.numberPress = this.numberPress.bind(this);
  }
  componentDidMount() {
    this.setState({
      number: `(${this.state.numberArray.slice(0, 3)}) ${this.state.numberArray.slice(
        3,
        6
      )}-${this.state.numberArray.slice(6, 10)}`,
    });
  }
  deleteNum() {
    let temp = this.state.numberArray;
    temp[this.state.index - 1] = '_';
    this.setState({ numberArray: temp }, () => {
      if (this.state.index > 0) this.setState({ index: this.state.index - 1 });
    });
  }
  clear() {
    this.setState({ numberArray: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'] });
  }
  numberPress(number) {
    let temp = this.state.numberArray;
    temp[this.state.index] = number;
    this.setState({ numberArray: temp }, () => {
      if (this.state.index < 10) this.setState({ index: this.state.index + 1 });
    });
  }

  render() {
    let number =
      this.state.numberArray[0] === '_'
        ? ''
        : `(${this.state.numberArray.slice(0, 3).join('')}) ${this.state.numberArray
            .slice(3, 6)
            .join('')}-${this.state.numberArray.slice(6, 10).join('')}`;
    return (
      <View style={styles.container}>
        <Header
          outerContainerStyles={{ height: 300 }}
          backgroundColor="#e9e9e9"
          centerComponent={{ text: 'Guest Check-In', style: { color: '#000', fontSize: 100 } }}
        />
        <FormLabel>Number</FormLabel>
        <FormInput
          keyboardType="number-pad"
          value={number}
          onChangeText={number => this.setState({ number })}
        />
        <Numpad clear={this.clear} deleteNum={this.deleteNum} numberPress={this.numberPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
  },
});
