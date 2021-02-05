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
  Dimensions
} from 'react-native';
import Header from './HeaderComponent';
import { PRODUCTLIST } from '../shared/productlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class ShoppingCart extends Component {


  constructor(props) {
    super(props);
    this.state = {
      shopCartItem: [],
      cartReady: false,
      screenWidth: "",
      screenHeight: "",
      //cartTotalPrice: this.getCartTotalPrice(),

    }
    this.onPressItemQtyUp = this.onPressItemQtyUp.bind(this);
    this.onPressItemQtyDown = this.onPressItemQtyDown.bind(this);
  }

  getScreenSize = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })
    //console.log(screenWidth)
    //console.log(screenHeight)
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
    console.log("component did mount");
    this.getScreenSize();
    console.log(this.state.shopCartItem);
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

  onPressItemQtyUp = (item, evt) => {
    evt.preventDefault();

    //get index of the cart item to update qty
    var getCartItemIndex = this.state.shopCartItem.findIndex(getCartItem => getCartItem.id === item.id)
    //console.log(getCartItemIndex)

    //temp storage to update qty for updating to local storage
    var tempQtyArray = this.state.shopCartItem;
    //console.log(tempQtyArray[getCartItemIndex].qty)
    tempQtyArray[getCartItemIndex].qty = tempQtyArray[getCartItemIndex].qty + 1;

    //update cartitems in localstorage 
    this.setAsyncStorage("Cart", JSON.stringify(tempQtyArray))
  }

  onPressItemQtyDown = (item, evt) => {
    evt.preventDefault();
    //get index of the cart item to update qty
    var getCartItemIndex = this.state.shopCartItem.findIndex(getCartItem => getCartItem.id === item.id)

    //temp storage to update qty for updating to local storage
    var tempQtyArray = this.state.shopCartItem;
    if (tempQtyArray[getCartItemIndex].qty > 1) {
      tempQtyArray[getCartItemIndex].qty = tempQtyArray[getCartItemIndex].qty - 1;
      //update cartitems in localstorage 
      this.setAsyncStorage("Cart", JSON.stringify(tempQtyArray))
    }
  }

  onConfirmDeleteOk = (prodId) => {
    //console.log("Ok pressed" + prodId)
    var getCartItemIndex = this.state.shopCartItem.findIndex(getCartItem => getCartItem.id === prodId)
    if (getCartItemIndex > -1) {
      console.log("Ok delete " + prodId + " " + getCartItemIndex)
      //temp storage to update qty for updating to local storage - remove the item from cart
      var tempQtyArray = this.state.shopCartItem;
      tempQtyArray.splice(getCartItemIndex, 1);
      this.setAsyncStorage("Cart", JSON.stringify(tempQtyArray)) //write to local storage
    } else {
      console.log("item not found in cart " + getCartItemIndex)
    }

  }

  showConfirmDelete(prodId, prodName, evt) {
    evt.preventDefault();
    Alert.alert(
      'Confirm?',
      "Do you want to remove " + prodName + " from cart?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.onConfirmDeleteOk(prodId) },
      ]
    );
  }

  getCartTotalPrice = () => {
    var tempCartArray = this.state.shopCartItem;
    var totalprice = 0.00;

    tempCartArray.forEach((item, index) => {
      totalprice += parseFloat(item.price) * parseInt(item.qty);
    });
    totalprice = (totalprice).toFixed(2);                    //fix at 2 decimal point
    //console.log(totalprice);
    return totalprice;
  }


  renderItem = ({ item }) => {
    const backgroundColor = "#ffffff"

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>

        <View style={{ width: this.state.screenWidth / 2, height: this.state.screenWidth / 2 }}>
          <Image source={item.src} style={{ width: 180, height: 160, alignSelf: 'center' }} />
        </View>

        <View style={{ width: this.state.screenWidth / 2, height: this.state.screenWidth / 2 }} >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.buttonStyle}>
              <Button title={" + "} onPress={e => this.onPressItemQtyUp(item, e)} />
            </View>
            <Text style={styles.itemtext}>{""}{item.qty} {""}</Text>
            <View style={styles.buttonStyle}>
              <Button title={" - "} onPress={e => this.onPressItemQtyDown(item, e)} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: this.state.screenWidth / 3 }}>

            </View>
            <View style={styles.buttonStyle}>
              <Icon name="trash-o" size={24} color="grey" onPress={e => this.showConfirmDelete(item.id, item.name, e)} />
            </View>
          </View>
        </View>
      </View>
    );
  };


  render() {
    this.retrieveData()
    var pricetotal = this.getCartTotalPrice();

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
          <Text>Total - {this.state.shopCartItem.length}</Text>
          <Text>Price - {pricetotal}</Text>
          <Button title="Check Out" onPress={() =>
            this.props.navigation.navigate("Delivery")} />
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
