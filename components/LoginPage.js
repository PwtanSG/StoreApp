import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Modal, TouchableHighlight } from 'react-native'

class Login extends Component {
   state = {
      email: '',
      password: '',
      modalVisible: false,
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
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
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <TouchableHighlight
               onPress={() => {
                  this.showModal();
               }}>
               <Text>Show Modal</Text>
            </TouchableHighlight>

            <Modal
               animationType="slide"
               transparent
               visible={this.state.modalVisible}
               onRequestClose={() => {
                  console.log('Modal has been closed.');
               }}>
               <View
                  style={{
                     flex: 1,
                     alignItems: 'center',
                     backgroundColor: 'gray',
                     justifyContent: 'center',
                     margin: 25,
                  }}>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                     This modal will close in Five Seconds..
                  </Text>
               </View>
            </Modal>


         </View>
      )
   }
}
export default Login

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