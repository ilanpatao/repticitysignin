import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

export default class CheckInInfo extends React.Component {
  render() {
    return (
      <View>
        <Icon name="info" type="Foundation" color="#4DC34A" />
        <Text>First Time Guests</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
