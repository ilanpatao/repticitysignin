import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Header, FormLabel, FormInput, ButtonGroup } from 'react-native-elements';

export default class JustifyContentBasics extends Component {
  constructor() {
    super();

    this.goToCamera = this.goToCamera.bind(this);
  }
  goToCamera(type) {
    this.props.navigation.navigate('camera');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Header
          outerContainerStyles={{ height: 300, borderBottomWidth: 0 }}
          backgroundColor="#e9e9e9"
          centerComponent={{
            text: 'You are checking in as a..',
            style: { color: '#7F7F7F', fontSize: 100, fontWeight: '300', marginBottom: 100 },
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 200,
            marginBottom: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableHighlight onPress={this.checkIn} style={styles.visitor}>
            <View style={{ width: 150, height: 150, margin: 100 }}>
              <Text style={styles.submitText}>Visitor</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.checkIn} style={styles.provider}>
            <View style={{ width: 150, height: 150, margin: 100 }}>
              <Text style={styles.submitText}>Provider</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{ hieght: 100 }} onPress={this.checkIn} style={styles.vendor}>
            <View style={{ width: 150, height: 150, margin: 100 }}>
              <Text style={styles.submitText}>Vendor</Text>
            </View>
          </TouchableHighlight>
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
  visitor: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#55CB37',
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
  provider: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#37CBAD',
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
  vendor: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#3755CA',
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
