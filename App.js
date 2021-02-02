import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import IconBadge from 'react-native-icon-badge';
import Home from './components/Home';
import TravelScreen from './components/Travelx';
import ContactScreen from './components/Contact';
import ProductScreen from './components/Products';
import LoginScreen from './components/LoginPage';
import ModalScreen from './components/ModalComponent';
import StartScreen from './components/Splashscreen';
import Parent from "./components/ParentComponent";
import ShoppingCart from './components/ShopCart'
import SecondScreen from './components/SecondScreen';
import FirstScreen from './components/FirstScreen';
import ThirdScreen from './components/ThirdScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
    </Stack.Navigator>
  );
}

function ShopCartScreen1() {
  AsyncStorage.getItem("Cart").then((value) => {
    //this.setState({ "ShopCart": value });
    //setShopCart(value)
    console.log(value)
  })
    .then(res => {
      //console.log("in cart " + ShopCart);
      //console.log(value)
      //setAsyncStorage ("Cart",JSON.stringify(cartArray))
      //do something else
    });
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      cartItems: '',
      cartArr: [],
    }
    //this.ShopCartScreen=this.ShopCartScreen.bind(this);
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        // We have data!!
        console.log("retrieve:")
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {

    //const myItems = [{ name: 'item 1' }, { name: 'item2' }];
    ShopCartScreen = () => {
      this.retrieveData()
      //var obj = [{ name: "John", age: 30, city: "New York" }];
      //const myItems = [{ name: 'item 1' }, { name: 'item2' }];
      //var myJSON = JSON.stringify(obj);
      //var temp;
      //var objShopCart = [{ "id": 1, name: "aocado", qty: 9 }, { "id": 5, name: "toes", qty: 1 }];
      //this.setState({ cartArr: objShopCart });
      /* AsyncStorage.getItem("Cart").then((value) => {
        this.setState({ cartItems: value });
        
        objShopCart = JSON.parse(this.state.cartItems);
        //console.log(this.state.cartItems)
        this.setState({ cartArr: objShopCart });
        //console.log(objShopCart);
        //setShopCart(value)
        //temp = value;
        //console.log("Get storage")
        //console.log(value)
        //console.log(temp)
      })
        .then(res => {
          //console.log("in cart " + this.state.cartItems);
          //console.log(value)
          //setAsyncStorage ("Cart",JSON.stringify(cartArray))
          //do something else
          //console.log(objShopCart)
        });
        */
      return (
        <ShoppingCart />
      );
    }

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home" component={Home1}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={30} color="black" />
              ),
              showIcon: true
            }}
          />
          <Tab.Screen
            name="Products" component={ProductScreen}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: ({ color, size }) => (
                <Icon name="shopping-basket" size={24} color="black" />
              ),
              showIcon: true
            }}
          />
          <Tab.Screen name="Contact" component={ContactScreen}
            options={{
              tabBarLabel: 'Contract',
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={24} color="black" />
              ),
              showIcon: true
            }}

          />
          <Tab.Screen name="Cart" component={ShoppingCart}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color, size }) => (
                <Icon name="shopping-cart" size={24} color="black" />
              ),
              showIcon: true
            }}
          />
          <Tab.Screen name="Account" component={LoginScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color, size }) => (
                <Icon name="user-circle" size={24} color="black" />
              ),
              showIcon: true
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
