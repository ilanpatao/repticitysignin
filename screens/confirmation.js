import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location } from 'expo';
import { Header, FormLabel, FormInput, ButtonGroup } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Main' })],
});

export default class example extends React.Component {
  constructor() {
    super();
    this.goHome = this.goHome.bind(this);
  }
  componentDidMount() {
    this.goHome();
  }

  goHome() {
    setTimeout(() => {
      //console.log(this.props.navigation.dispatch);
      this.props.navigation.dispatch(resetAction);
    }, 1500);
  }

  render() {
    const message =
      this.props.navigation.state.params.message === 'checkOut'
        ? 'Youre Checked Out'
        : 'Youre Checked In ';
    return (
      <Header
        outerContainerStyles={{ height: 300, borderBottomWidth: 0 }}
        backgroundColor="#e9e9e9"
        centerComponent={{
          text: message,
          style: { color: '#7F7F7F', fontSize: 100, fontWeight: '300', marginBottom: 100 },
        }}
      />
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
});
