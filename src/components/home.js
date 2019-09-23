import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export class homePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>"This Is Home"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});


export default homePage;
