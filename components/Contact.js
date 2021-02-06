import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { PRODUCTLIST } from '../shared/productlist';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "zoo", 
      products: PRODUCTLIST,
      filteredResult: []
    }
  }

  Product2 = PRODUCTLIST.map(item => item.name === "Orange1");

  onConfirmDeleteOk = (prodname) => {
    //console.log("Ok pressed" + prodId)
    //var getItemIndex = this.state.products.findIndex(item => (item.name).search(prodId))
    var getItem = this.state.products.filter(item => item.name == prodname)
    //console.log(getItemIndex)
    console.log(getItem)
    this.setState({filteredResult: getItem})
  }


  callbackPickerFunction = (childData) => {
    this.setState({ message: childData })
  }

  render() {
    this.onConfirmDeleteOk("Orange");
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{PRODUCTLIST.length}</Text>
        <Text>{this.state.filteredResult.length}</Text>
        
      </View>
    )
  }
}
export default Contact;
