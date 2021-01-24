import React, { Component } from 'react';
import { TextInput,StyleSheet} from 'react-native';

 const Travel = () =>{
  
  const [value, onChangeText] = React.useState('Display');

    return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
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

export default Travel;
