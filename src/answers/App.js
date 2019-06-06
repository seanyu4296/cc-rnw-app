import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import LoginForm from './LoginForm';
import ListView from './ListView';

class App extends Component {
  state = {
    isLoggedIn: false,
    arr: [1, 2, 3, 4],
  };

  login = () => {
    fetch('http://127.0.0.1:4000')
      .then((res) => res.text())
      .then((data) => {
        this.setState({
          isLoggedIn: true,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoggedIn ? (
          <Text>Logged in</Text>
        ) : (
          <LoginForm login={this.login} />
        )}
        <ListView arr={this.state.arr} />
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
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
