import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';

class Travel extends Component {

  
  constructor(props) {
    super(props);

    //tracking nav, modal state, default close:false
    this.state = {
      userinput: "",
      
    };
  }

  render() {

    return (
      <View>
        <Text style={{ fontSize: 20 }}>This is the Travel page</Text>
        <Button title="Contact" onPress={() =>
          this.props.navigation.navigate("Contact")} />
        <TextInput
          style={styles.input}

        />
      </View>



    )
  }
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
