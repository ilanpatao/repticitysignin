import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

export default class example extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.infoContainer}>
          <Icon name="info" type="Foundation" color="#4DC34A" />
        </View>
        <View style={styles.infoContainer}>
          <Icon name="info" type="Foundation" color="#4A8AC3" />
        </View>
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
  infoContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
});
