import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation/root-navigation.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
  },
});
