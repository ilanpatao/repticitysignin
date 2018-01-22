import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.column}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableHighlight style={styles.checkInBtn}>
            <View style={{ width: 200, height: 200, margin: 100, backgroundColor: '#8BC34A' }} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.checkOutBtn} onPress={() => console.log('pressed')}>
            <View style={{ width: 200, height: 200, margin: 100, backgroundColor: '#C34A4E' }} />
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  checkInBtn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#8BC34A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  checkOutBtn: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#C34A4E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
