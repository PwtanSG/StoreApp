import React, { Component } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

class Child extends React.Component {
  constructor(props){
    super(props);
    this.sendBackData1 = this.sendBackData1.bind(this);
  }
  sendBackData = () => {
    this.props.parentCallback("child message");
  }

  sendBackData1 = () => {
    Alert.alert('Button with adjusted color pressed');
    this.props.parentCallback("child message");
    console.log("click")
  }



  render() {
    return (
      <View>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={this.sendBackData1}
        />
      </View>

    );
  }
}
export default Child;
