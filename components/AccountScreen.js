import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Modal, TouchableHighlight } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './LoginPage';
import Profile from './Profile';

class AccountScreen extends Component {
   state = {
      //email: '',
      //password: '',
      loginname: '',
      error: '',
      isUserLogin: false

   }

   //callback from child
   LoginCallbackFunction = (child_loginname) => {
      console.log(child_loginname)
      if (child_loginname !== "") {
         this.setState({
            isUserLogin: true,
            loginname: child_loginname
         })
      }
   }

   LogoutCallbackFunction = (child_logout) => {
      console.log(child_logout)
      this.removeLoginLocalStorage();
      if (child_logout !== "") {
         this.setState({
            isUserLogin: false,
            loginname: ""
         })
      }
   }

   removeLoginLocalStorage = async () => {
      try {
         await AsyncStorage.removeItem('name')
      } catch (e) {
         // remove error
      }
      console.log('Remove Done.')
   }

   componentDidMount = () => {
      //retreive persistence storage to check has user login / and get details
      AsyncStorage.getItem("name").then((value) => {
         console.log(value)
         if (value !== null) {
            if (value !== "") {
               this.setState({
                  isUserLogin: true,
                  loginname: value,
               })
            }

         }
      })
         .then(res => {

         });
   }


   render() {
      if (!this.state.isUserLogin) {
         return (
            <Login LoginParentCallback={this.LoginCallbackFunction} />
         )
      } else {
         return (
            <Profile loginname={this.state.loginname} LogoutParentCallback={this.LogoutCallbackFunction} navigation={this.props.navigation}/>
         )
      }
   }

}

export default AccountScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
   },
   submitButtonText: {
      color: 'white',
   }
})