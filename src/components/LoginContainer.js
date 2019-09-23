import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {
  mapLoginStateToProps,
  mapLoginDispatchToProps,
} from '../redux/modules/LoginPage/action';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.buttonClick}
          title="Sign in with facebook"
          color="#3c50e8"
        />
        <Text style={{color: 'red'}}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

let LoginContainer = connect(
  mapLoginStateToProps,
  mapLoginDispatchToProps,
)(LoginPage);
export default LoginContainer;
