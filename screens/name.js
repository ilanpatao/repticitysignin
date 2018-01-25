import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { FormLabel, FormInput } from 'react-native-elements';

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel>First Name</FormLabel>
          <FormInput autoFocus onSubmitEditing={() => this.lastName.focus()} />
        </View>
        <View style={styles.formContainer}>
          <FormLabel>Last Name</FormLabel>
          <FormInput ref={ref => (this.lastName = ref)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formContainer: {
    width: '50%',
  },
});
