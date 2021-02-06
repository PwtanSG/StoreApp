import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image, TouchableOpacity, Alert
} from 'react-native';
import Header from './HeaderComponent'

export default class Startscreen extends Component {
  constructor() {
    super();
    this.state = {
      //isVisible: true,
    }
  }

  Hide_Splash_Screen = () => {
    this.setState({
      //isVisible: false
    });
  }

  componentDidMount() {
    /*
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
    */
  }

  render() {

    return (
      <View style={styles.MainContainer}>
        <View style={styles.SplashScreen_RootView}>
          <View style={styles.SplashScreen_ChildView}>
            <Image source={require('../images/icon_tran_200x200.png')}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    //00BCD4
    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A5FDC',
      flex: 1,
    },
  });  