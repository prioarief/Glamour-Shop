import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {FormSignup, HeaderBackButton} from '../components/molecules';

import {Button} from '../components/atoms';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      formGroup: [
        {
          placeholder: 'Name',
          value: '',
          type: 'none',
          secure: false,
        },
        {
          placeholder: 'Email',
          value: '',
          type: 'emailAddress',
          secure: false,
        },
        {
          placeholder: 'Password',
          value: '',
          type: 'password',
          secure: true,
        },
      ],
    };
  }

  handleSignup = () => {
    console.log('Thanks for register');
  };

  handleBackButton = () => {
    console.log('Go Back');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton submit={this.handleBackButton} />
        <View style={styles.formGroup}>
          <FormSignup
            title="Sign Up"
            link="Already have an account?"
            formGroup={this.state.formGroup}
            submit={this.handleSignup}
          />
        </View>
        <View>
          <Button
            title="SIGN UP"
            big={true}
            type="primary"
            submit={this.handleSignup}
          />
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  formGroup: {
    marginTop: width * 0.09,
    alignItems: 'center',
  },
});

export default Signup;
