import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import IconBadge from 'react-native-icon-badge';
import Home from './components/Home';
import ContactScreen from './components/Contact';
import ProductScreen from './components/Products';
import LoginScreen from './components/LoginPage';
import ModalScreen from './components/ModalComponent';
import StartScreen from './components/Splashscreen';
import Parent from "./components/ParentComponent";
import ShoppingCart from './components/ShopCart';
import DeliveryDetails from './components/DeliveryDetails';
import SecondScreen from './components/SecondScreen';
import FirstScreen from './components/FirstScreen';
import ThirdScreen from './components/ThirdScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={() => ({
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={() => ({
          title: 'MyScreen',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
    </Stack.Navigator>
  );
}


function ShopCart1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={ShoppingCart}
        options={() => ({
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryDetails}
        options={() => ({
          title: 'MyScreen',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        })}
      />
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
          <Tab.Screen name="Cart" component={ShopCart1}
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
    );
  }
}



export default App;
