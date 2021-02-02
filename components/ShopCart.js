import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import Header from './HeaderComponent';
import { PRODUCTLIST } from '../shared/productlist';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ShoppingCart extends Component {


  constructor(props) {
    super(props);
    this.state = {
      shopCartItem: [],
      cartReady: false,
    }
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        // you have cart item!!
        //console.log(value)
        var obj = JSON.parse(value)
        this.setState({
          shopCartItem: obj,
          cartReady: true
        });
      } else {
        this.setState({
          shopCartItem: [],
          cartReady: true
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };


  componentDidMount() {
    console.log("component did mount")
    console.log(this.state.shopCartItem)
  }

  componentWillUnmount() {
    console.log("component unmounted")
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  renderItem = ({ item }) => {
    const backgroundColor = "#ffffff"

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 200, height: 200}}>
          <Image source={item.src} style={{width: 180, height: 160, alignSelf: 'center'}} />
        </View>

        <View style={{ width: 200, height: 200}} >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.itemtext}>${item.price} {item.unit}</Text>

        </View>
      </View>
    );
  };


  render() {
    this.retrieveData()

    if (this.state.shopCartItem.length > 0) {
      return (
        <View style={styles.container}>

          <Text>Length - {this.state.shopCartItem.length}</Text>
          <FlatList
            data={this.state.shopCartItem}
            /*renderItem={({ item }) =>
              <Text style={styles.item}>{item.name} ${item.price} {item.unit}</Text>
            }
            */
            renderItem={this.renderItem}
            /*ItemSeparatorComponent={this.renderSeparator}*/
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Length - {this.state.shopCartItem.length}</Text>
          <Text>{ }</Text>
          <Text>You have no item yet. Start shopping now!</Text>
        </View>
      );
    }


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },

  itemtext: {
    fontSize: 18,
  },
});

export default ShoppingCart;
