/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical 3 - Stylesheet
 */

import React, { Component, useState } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
//import Header from './header';

const introduction = 'Mobile Application Development - React-Native';


const Home = () => {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.boardicon}>
        <Image source={require('./images/sp-logo.png')} style={{ alignSelf: 'center', width: 150, height: 80 }} resizeMode="stretch" />
      </View>
      <Text style={styles.welcome}>Learn to develop Mobile App Development</Text>
      <Text style={styles.instructions}>{introduction} </Text>
      <Text>{count}</Text>
    
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.startButton}>
          <Text style={{ color: 'white' }}>Get Started Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#0cc2f0',
  },
  welcome: {
    top: 0,
    flexDirection: 'row',
    position: 'absolute',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#320cf0',
  },
  instructions: {
    color: '#225344',
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'center',
    fontSize: 12,
    lineHeight: 18
  },
  boardicon: {
    alignItems: 'center',
    marginTop: 50
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  startButton: {
    width: 300,
    height: 45,
    backgroundColor: '#320cf0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
});

export default Home;
