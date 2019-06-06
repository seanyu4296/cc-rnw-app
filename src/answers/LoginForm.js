import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class LoginForm extends React.Component {
  state = {
    name: '',
    password: '',
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TextInput
          placeholder="password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.login(this.state.name, this.state.password);
          }}
        >
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginForm;
