import React, { Component, useState } from 'react';
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
import PickerComp from './PickerComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Products = () => {

  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedCatId, setSelectedCatId] = useState('All');
  const [ShopCart, setShopCart] = useState('');

  const onPressItem = (item) => {
    setSelectedId(item.id);
  }

  const onPressAddToCart = (item) => {

    console.log("add to cart : " + item.name);
    var cartArray = [];
    //var objSelected = { id: item.id, name: item.name, qty: 1 };


    AsyncStorage.getItem("Cart").then((value) => {
      //this.setState({ "ShopCart": value });
      if (value != null){
        console.log("then:" + value)
        cartArray=JSON.parse(value);
      }else{
        console.log("Null")
      }
    })
      .then(res => {
          console.log("in res " + ShopCart);
          cartArray.push({ id: item.id, name: item.name, qty: 1, src: item.src, price: item.price, unit: item.unit });
          setAsyncStorage("Cart", JSON.stringify(cartArray))
        
      });
    
    
  }

  const setAsyncStorage = async (key, name) => {
    try {
      await AsyncStorage.setItem(
        key,
        name
      );
    } catch (error) {
      // Error saving data
    }
  };


  const onPressBack = () => {
    setSelectedId(0);
  }

  const callbackPickerFunction = (childPickerData) => {
    let catSelected = 'All';
    (childPickerData == 2) ? catSelected = 'Fruits'
      : (childPickerData == 3) ? catSelected = 'Vegetables'
        : (childPickerData == 4) ? catSelected = 'Meat'
          : (childPickerData == 5) ? catSelected = 'Seafood'
            : (childPickerData == 6) ? catSelected = 'Beverages'
              : catSelected = 'All';
    setSelectedCatId(catSelected)
    console.log(childPickerData + ":" + catSelected)
  }

  var PRODUCTLISTSHOW = PRODUCTLIST
  if (selectedId !== 0) {
    //if selectedId non zero, filter object by product id
    PRODUCTLISTSHOW = PRODUCTLIST.filter((prod) => prod.id === selectedId);
    console.log(selectedId)
  } else { //objects to display all products
    if (selectedCatId === 'All') {
      PRODUCTLISTSHOW = PRODUCTLIST;
    } else {
      PRODUCTLISTSHOW = PRODUCTLIST.filter((prod) => prod.category === selectedCatId);
    }
  }

  //render of an item
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffffff";
    let showBackbtn;
    let showProductDescription;

    //if selectedId is non zero = user selected, show product with details description + back btn
    if (selectedId !== 0) {
      console.log('selected : ' + selectedId);
      showProductDescription = <Text style={styles.itemtext}>{item.description}</Text>
      showBackbtn = <Button onPress={onPressBack} title="Back" />
    } else {

    }

    return (
      <TouchableOpacity onPress={() => onPressItem(item)} style={[styles.item, backgroundColor]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
        <Image source={item.src} style={{ alignSelf: 'center' }} resizeMode="stretch" />
        {showProductDescription}
        <Text>{ }</Text>
        <Button
          onPress={() => onPressAddToCart(item)}
          title="Add to cart"
        />
        <Text>{ }</Text>
        {showBackbtn}
      </TouchableOpacity>
    );
  };

  //init a call back from child component picker, to get user's selected category
  let showCatPicker;
  if (selectedId === 0) {
    showCatPicker = <PickerComp parentCallback={callbackPickerFunction} />
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping" />
      <SafeAreaView style={styles.container}>
        <Text>{ }</Text>
        {showCatPicker}
        <FlatList
          data={PRODUCTLISTSHOW}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </View>
  );

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

export default Products;
