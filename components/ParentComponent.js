import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Child from './ChildComponent'

class Parent extends React.Component {
    state = { message: "parent message" }

    callbackFunction = (childData) => {
        this.setState({message: childData})
    }
    render() {
         return (
             <View>
             <Text>
                  <Child parentCallback = {this.callbackFunction}/>
                  {this.state.message}
             </Text>
             </View>
         );
    }
 }

 export default Parent;