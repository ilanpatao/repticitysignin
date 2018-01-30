import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

export default class CheckInInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 100, alignItems: 'center' }}>
          <View style={styles.IconContainer}>
            <Icon name="info" type="Foundation" color="#4DC34A" />
            <Text style={styles.infoHeader}>First Time Guests</Text>
          </View>
          <Text>Please tap your phone number to continue checking in</Text>
        </View>
        <View style={{ paddingBottom: 100, alignItems: 'center' }}>
          <View style={styles.IconContainer}>
            <Icon
              style={{ width: 200, textAlign: 'center', justifyContent: 'center' }}
              name="info"
              type="Foundation"
              color="#4A8AC3"
            />
            <Text style={styles.infoHeader}> Returning Guests</Text>
          </View>
          <Text> Please tap your phone number, your number will automatically check you in.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  infoHeader: {
    width: 400,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  IconContainer: {
    paddingBottom: 10,
    width: 35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
