import React, { Component } from 'react';
import {Text, TextInput,StyleSheet} from 'react-native';

 const SecondScreen = () =>{
  
    return (
      <Text>Second Screen</Text>
    );
  
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  }
  
})

export default SecondScreen;
