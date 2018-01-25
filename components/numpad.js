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
    this.handlePress = this.handlePress.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  handlePress(key) {
    if (key === 'Delete') {
      this.props.deleteNum();
    } else if (key === 'Clear') {
      this.props.clear();
    } else {
      this.props.numberPress(key);
    }
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
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            key={i}
            onPress={num => this.handlePress(rows[i][num])}
            buttons={row}
            containerStyle={{ height: 100, width: 400, backgroundColor: '#e9e9e9' }}
            innerBorderStyle={{ color: '#e9e9e9', width: 5 }}
            underlayColor="#e9e9e9"
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
  buttonStyle: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#4A8AC3',
    fontSize: 30,
  },
});
