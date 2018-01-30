import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location } from 'expo';
import { Header, FormLabel, FormInput, ButtonGroup } from 'react-native-elements';

export default class example extends React.Component {
  render() {
    const message =
      this.props.navigation.state.params.message === 'checkOut'
        ? 'Youre Checked Out'
        : 'Youre Checked In ';
    return (
      <Header
        outerContainerStyles={{ height: 300, borderBottomWidth: 0 }}
        backgroundColor="#e9e9e9"
        centerComponent={{
          text: message,
          style: { color: '#7F7F7F', fontSize: 100, fontWeight: '300', marginBottom: 100 },
        }}
      />
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
