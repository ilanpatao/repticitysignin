import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { FormLabel, FormInput } from 'react-native-elements';

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
    };
  }

  submitFirstName() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel>Company Name</FormLabel>
          <FormInput
            autoFocus
            onChange={company => this.setState({ company })}
            ref={ref => (this.lastName = ref)}
            onSubmitEditing={() =>
              this.props.navigation.navigate('Camera', {
                company: this.state.company,
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
