import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import Header from './HeaderComponent';
import { PRODUCTLIST } from '../shared/productlist';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ShoppingCart extends Component {


  constructor(props) {
    super(props);
    this.state = {
      shopCartItem: this.props.ShopCartItems
    }
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        // We have data!!
        //console.log("retrieve in Shopcart:")
        //console.log(value);
        //console.log(value);
        var obj = JSON.parse(value)
        this.setState({ shopCartItem: obj });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  showall(){
    for (i = 0, len = this.state.shopCartItem.length, text = ""; i < len; i++) {
      text += this.state.shopCartItem[i] + "<br>";
    }
    return text
  }
  
  componentDidMount() {
    console.log("component did mount")
    //this.setState({shopCartItem: this.props.ShopCartItems})
    //console.log(this.props.ShopCartItems)
    //console.log(this.props.ShopCartItems[0].name)
    //console.log(this.state.shopCartItem[0].name)

  }

  componentWillUnmount(){
    console.log("component unmounted")
  }

  componentWillUnmount() {
    console.log("component will mount")
  }

 
  render() {
    this.retrieveData()
    let temp = this.props.ShopCartItems;
    let temp4 = this.props.ShopCartItems[0].name
    let temp2 = [{"id":1,name:"aocado2",qty:9},{"id":5,name:"toes2",qty:1}];
    let temp3 = JSON.stringify(temp)
    //let temp4 = JSON.parse(temp3)
    //let temp1 = [{"id":1,"name":"Avodo","qty":1},{"id":5,"name":"Tomatoes","qty":1}]
    //let temp2 = [{id:1,name:"avocado",qty:1},{id:5,name:"Tomatoes",qty:1}]
    
    //var objShopCart = JSON.parse(temp);
    //console.log(temp)
    return (
      <View style={styles.container}>
        <Text>{temp4}</Text>
        <Text>Test</Text>
        <Text>{temp2[0].name}</Text>
        <Text>{this.state.shopCartItem[0].name}</Text>
        <Text>{this.state.shopCartItem[this.state.shopCartItem.length -1].name}</Text>
        <Text>Length - {this.state.shopCartItem.length}</Text>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },  
})  

export default ShoppingCart;
