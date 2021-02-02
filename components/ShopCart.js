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
      shopCartItem: [],
      cartReady: false,
 
    }
    this.onPressItemUp = this.onPressItemUp.bind(this);
    this.onPressItemDown = this.onPressItemDown.bind(this);
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        // you have cart item!!
        //console.log(value)
        var obj = JSON.parse(value)
        this.setState({
          shopCartItem: obj,
          cartReady: true
        });
      } else {
        this.setState({
          shopCartItem: [],
          cartReady: true
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  setAsyncStorage = async (key, name) => {
    try {
      await AsyncStorage.setItem(
        key,
        name
      );
    } catch (error) {
      // Error saving data
    }
  };

  componentDidMount() {
    console.log("component did mount")
    console.log(this.state.shopCartItem)
  }

  componentWillUnmount() {
    console.log("component unmounted")
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  onPressItemUp = (item,evt) => {
    evt.preventDefault();
    //console.log(item.name + " Up Qty " + item.qty);

    //get index of the cart item to update qty
    var getCartItemIndex = this.state.shopCartItem.findIndex(getCartItem => getCartItem.id === item.id)
    //console.log(getCartItemIndex)

    //temp storage to update qty for updating to local storage
    var tempQtyArray = this.state.shopCartItem;
    //console.log(tempQtyArray[getCartItemIndex].qty)
    tempQtyArray[getCartItemIndex].qty = tempQtyArray[getCartItemIndex].qty + 1;
    //console.log(tempQtyArray[getCartItemIndex].qty)
    //});
    //this.setState({shopCartItem: tempQtyArray})
    //console.log(tempQtyArray)
    //update cartitems in localstorage 
    this.setAsyncStorage("Cart", JSON.stringify(tempQtyArray))
  }

  onPressItemDown = (item) => {
    //console.log(item.name + " Up Qty " );
  }

  renderItem = ({ item }) => {
    const backgroundColor = "#ffffff"

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 200, height: 200 }}>
          <Image source={item.src} style={{ width: 180, height: 160, alignSelf: 'center' }} />
        </View>

        <View style={{ width: 200, height: 200 }} >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.buttonStyle}>
            <Button title={"+"} onPress={e => this.onPressItemUp(item, e)}/>
            </View>
            <Text style={styles.itemtext}>{"  "}{item.qty} {"  "}{}</Text>
            <View style={styles.buttonStyle}>
              <Button title={"-"} onPress={this.onPressItemDown(item)}/>
            </View>
          </View>
        </View>
      </View>
    );
  };


  render() {
    this.retrieveData()

    if (this.state.shopCartItem.length > 0) {
      return (
        <View style={styles.container}>

          <Text>Length - {this.state.shopCartItem.length}</Text>
          <FlatList
            data={this.state.shopCartItem}
            /*renderItem={({ item }) =>
              <Text style={styles.item}>{item.name} ${item.price} {item.unit}</Text>
            }
            */
            renderItem={this.renderItem}
            /*ItemSeparatorComponent={this.renderSeparator}*/
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Length - {this.state.shopCartItem.length}</Text>
          <Text>{ }</Text>
          <Text>You have no item yet. Start shopping now!</Text>
        </View>
      );
    }


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 22,
  },

  itemtext: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 18,
  },

  buttonStyle: {
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#ffffff'
  },
});

export default ShoppingCart;
