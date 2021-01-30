import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home';
import TravelScreen from './components/Travelx';
import ContactScreen from './components/Contact';
import ProductScreen from './components/Products';
import LoginScreen from './components/LoginPage';
import ModalScreen from './components/ModalComponent';
import StartScreen from './components/Splashscreen'
import Parent from "./components/ParentComponent"

import SecondScreen from './components/SecondScreen'
import FirstScreen from './components/FirstScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
}

class App extends Component {
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
          <Tab.Screen name="Travel" component={LoginScreen}
            options={{
              tabBarLabel: 'Travel',
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={24} color="black" />
              ),
              showIcon: true
            }}
          />
          <Tab.Screen name="Account" component={ModalScreen}
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
