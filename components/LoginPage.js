import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Modal, TouchableHighlight } from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {



   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         loginname: '',
         error: ''
      }
      this.sendBackParentData = this.sendBackParentData.bind(this);
   }

   sendBackParentData = (email) => {
      this.props.LoginParentCallback(email);
   }

   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'loginname': value }))

   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handleLogin = (email, pass) => {
      console.log('read:' + this.state.loginname)
      //alert('email: ' + email + ' password: ' + pass)
      if ((email === "wmf") && (pass === "password")) {
         this.setState({ error: "" })
         AsyncStorage.setItem('name', email);
         this.setState({ 'loginname': email });
         this.sendBackParentData(email);
      } else {
         this.setState({ error: "Incorrect email/password" })
      }
   }
   showModal = () => {
      console.log(this.State.modalVisible);
      this.setState({
         modalVisible: true,
      });
      console.log(this.State.modalVisible);
      setTimeout(() => {
         this.setState({
            modalVisible: false,
         });
      }, 5000);
   };

   render() {
      return (
         <View style={styles.container}>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={this.handleEmail} />

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               secureTextEntry
               autoCorrect={false}
               onChangeText={this.handlePassword} />

            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.handleLogin(this.state.email, this.state.password)
               }>
               <Text style={styles.submitButtonText}> LOGIN </Text>
            </TouchableOpacity>
            <Text>{this.state.error}</Text>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingLeft:10,
      paddingRight:10,
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#0A5FDC',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#0A5FDC',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
   },
   submitButtonText: {
      color: 'white',
   }
})