import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerComp from './PickerComponent'
import Child from './ChildComponent'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "zoo" 
    }


  }

  callbackPickerFunction = (childData) => {
    this.setState({ message: childData })
  }

  render() {
    return (
      <View>
        <PickerComp parentCallback = {this.callbackPickerFunction}/>
        <Text>{this.state.message}</Text>
      </View>
    )
  }
}
export default Contact;
