import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import IconBadge from 'react-native-icon-badge';
import StartScreen from './components/Splashscreen';
import AppScreen from './components/AppScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      cartItems: '',
      cartArr: [],
      timePassed: false,
    }
    //this.ShopCartScreen=this.ShopCartScreen.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 3000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
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

    if (!this.state.timePassed) {
      return <StartScreen />;
    } else {
      return <AppScreen />;
    }
  }
}



export default App;
