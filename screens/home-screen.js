import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component {
  constructor() {
    super();
    this.checkIn = this.checkIn.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }

  checkIn() {
    console.log('here');
    console.log(this.props.navigation.navigate(''));
    this.props.navigation.navigate('CheckIn');
  }

  checkOut() {
    console.log('here');
    console.log(this.props.navigation.navigate(''));
    this.props.navigation.navigate('CheckOut');
  }

  render() {
    return (
      <View style={styles.column}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableHighlight onPress={this.checkIn} style={styles.checkInBtn}>
            <View style={{ width: 200, height: 200, margin: 100 }}>
              <Text style={styles.submitText}>Check In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.checkOutBtn} onPress={this.checkOut}>
            <View style={{ width: 200, height: 200, margin: 100 }}>
              <Text style={styles.submitText}>Check Out</Text>
            </View>
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
    backgroundColor: '#e9e9e9',
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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
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
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  submitText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
