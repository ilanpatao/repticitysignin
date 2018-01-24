import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Header, FormLabel, FormInput, ButtonGroup } from 'react-native-elements';

export default class Numpad extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const rows = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['Clear', '0', 'Delete']];
    const row2 = ['4', '5', '6'];
    const row3 = ['7', '8', '9'];
    const row4 = ['Clear', '0', 'Delete'];
    const { selectedIndex } = this.state;

    return (
      <View>
        {rows.map((row, i) => (
          <ButtonGroup
            key={i}
            disableSelected
            onPress={this.updateIndex}
            buttons={row}
            containerStyle={{ height: 100, width: 500 }}
          />
        ))}
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
