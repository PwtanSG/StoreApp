import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ShoppingCart extends Component {
  
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Shopping Cart</Text>
        <Button title="Second" onPress={() =>
          this.props.navigation.navigate("SecondScreen")} />


        <Text>{ }</Text>
        <Button title="Third" onPress={() =>
          this.props.navigation.navigate("ThirdScreen")} />
      </View>
    )
  }
}


export default ShoppingCart;
