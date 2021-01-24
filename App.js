import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/Home';
import TravelScreen from './components/Travel';
import ContactScreen from './components/Contact';
import ProductScreen from './components/Products';
import LoginScreen from './components/LoginPage';
import ModalScreen from './components/ModalComponent';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',

              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="access-point" size={24} color="black" />
              ),
              showIcon: true 
            }}
          />
          <Tab.Screen name="Products" component={ProductScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Account" component={ModalScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
