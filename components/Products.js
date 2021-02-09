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
  Modal,
  TouchableHighlight,
} from 'react-native';
import Header from './HeaderComponent';
import { PRODUCTLIST } from '../shared/productlist';
import PickerComp from './PickerComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


const Products = () => {

  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedCatId, setSelectedCatId] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);


  const onPressItem = (item) => {
    setSelectedId(item.id);
  }

  const onPressAddToCart = (item) => {

    setModalVisible(!modalVisible);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    console.log("add to cart : " + item.name);
    var cartArray = [];


    AsyncStorage.getItem("Cart").then((value) => {
      if (value != null) {
        //console.log("then:" + value)
        cartArray = JSON.parse(value);
      } else {
        //console.log("Null")
      }
    })
      .then(res => {
        //console.log("in res " + ShopCart);
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
    //setshowSnackBar(true);
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
      showBackbtn = <Button onPress={onPressBack} color="#0A5FDC" title="Back" />
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
          color="#0A5FDC"
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { setModalVisible(false); }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon name="check-square" size={28} color="white" />
              <Text style={styles.modalText}>Added to cart!</Text>
            </View>
          </View>
        </Modal>

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
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  itemtext: {
    fontSize: 18,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "#808080",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    opacity: 0.8,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    color:"white",
    fontWeight: "bold",
  }
});

export default Products;
