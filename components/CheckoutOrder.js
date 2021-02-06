import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Modal, TouchableHighlight, Image, ActivityIndicator } from 'react-native'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CheckoutOrder extends Component {

   constructor(props) {
      super(props);
      this.state = {
         receivername: '',
         receivercontact: '',
         deliveryaddress: '',
         cc_num: '',
         cvc_num: '',
         confirm: false,
      }
      this.sendBackParentData = this.sendBackParentData.bind(this);
   }

   sendBackParentData = (email) => {
      this.props.LoginParentCallback(email);
   }

   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'loginname': value }))

   handleReceiverName = (text) => {
      console.log(text)
      this.setState({ receivername: text })
   }
   handleReceiverContact = (text) => {
      this.setState({ receivercontact: text })
   }

   handleDeliveryAddress = (text) => {
      this.setState({ deliveryaddress: text })
   }

   handleCcNum = (text) => {
      this.setState({ cc_num: text })
   }

   handleCvcNum = (text) => {
      this.setState({ cvc_num: text })
   }

   handleLogin = (rname,rcontact,deladdress, ccnum, cvcnum) => {
      //console.log('read:' + this.state.loginname)
      console.log(this.state.receivername)
      alert(rname  + " " + rcontact  + " " + deladdress + " " + ccnum + " " + cvcnum)
      if ((rname !== "") && (rcontact !== "") &&  (deladdress !== "") && (ccnum !== "") &&  (cvcnum !== "") ) {
         this.setState({ error: "" })
         this.setState({ confirm: true})
      } else {
         this.setState({ error: "Please fill in all fields" })
         alert("error: Please fill in all fields")
         this.setState({ confirm: false })
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
      if (this.state.confirm){
         return (
            <View style={styles.container}>
               <Text style={styles.title}>Order Confirmed</Text> 
               <Text style={styles.title}>TXN 0005678</Text> 
               <Image
                    source={require('../images/confirm.png')}
                    style={{ width: 160, height: 160, alignSelf: 'center' }}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
         )
      }else{
         return (
            <View style={styles.container}>
               <Text style={styles.title}>Delivery Details</Text>
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Receiver name"
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleReceiverName} />
   
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Receiver Contact no."
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleReceiverContact} />
   
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Delivery Address."
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleDeliveryAddress} />
   
               <Text style={styles.title}>Payment Details</Text>
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Credit card no."
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleCcNum} />
   
               <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="CVC no."
                  placeholderTextColor="#9a73ef"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleCvcNum} />
   
               <TouchableOpacity
                  style={styles.submitButton}
                  onPress={
                     () => this.handleLogin(this.state.receivername, this.state.receivercontact, this.state.deliveryaddress, this.state.cc_num, this.state.cvc_num)
                  }>
                  <Text style={styles.submitButtonText}> Confirm </Text>
               </TouchableOpacity>
               <Text style={styles.errortext}>{this.state.error}</Text>

               
            </View>
         )
   
      }
   }
}
export default CheckoutOrder

const styles = StyleSheet.create({
   container: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 23
   },
   input: {
      margin: 10,
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
   },
   title: {
      marginHorizontal: 10,
      fontSize: 22,
      fontWeight: 'bold'
   },
   errortext: {
      marginHorizontal: 10,
      color: 'red',
   },
})
