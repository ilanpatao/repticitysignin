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

  submitFirstName() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel>First Name</FormLabel>
          <FormInput
            autoFocus
            onChange={firstName => this.setState({ firstName })}
            onSubmitEditing={() => this.lastName.focus()}
          />
        </View>
        <View style={styles.formContainer}>
          <FormLabel>Last Name</FormLabel>
          <FormInput
            onChange={lastName => this.setState({ lastName })}
            ref={ref => (this.lastName = ref)}
            onSubmitEditing={() =>
              this.props.navigation.navigate('checkInType', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                number: this.props.navigation.state.params.number,
              })
            }
          />
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
    alignItems: 'center',
  },
  formContainer: {
    width: '50%',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '25%',
  },
});
