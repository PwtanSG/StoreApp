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

//console.log(PRODUCTLIST)
//const PRODUCTLIST1 = PRODUCTLIST.filter((prod)=>prod.id == 1)
//console.log(PRODUCTLIST1)

const onPressAddToCart = (item) => {
  console.log(item.id)
  Alert.alert('Add to cart button! item ' + item.id + "here")
}



const Item = ({ item, onPress, style }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
    <Image source={item.src} style={{ alignSelf: 'center' }} resizeMode="stretch" />
    <Button
      onPress={() => onPressAddToCart(item)}
      title="Add to cart"
    />
  </TouchableOpacity>

);


const Products = () => {

  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedCatId, setSelectedCatId] = useState('All');

  const onPressItem = (item) => {
    setSelectedId(item.id);
    //Alert.alert('You clicked the item ' + item.id + "here")
  }

  const onPressAddToCart = (item) => {
    setSelectedId(item.id);
    //Alert.alert('Add to cart button! item ' + item.id + "here")
    //Alert.alert('state! selectd id :  ' + selectedId + "here")
  }

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
  if (selectedId !== 0){
    PRODUCTLISTSHOW = PRODUCTLIST.filter((prod)=>prod.id === selectedId);
    console.log(selectedId)
  }else{
    if (selectedCatId === 'All'){
      PRODUCTLISTSHOW = PRODUCTLIST;
    }else{
      PRODUCTLISTSHOW = PRODUCTLIST.filter((prod)=>prod.category === selectedCatId);
    }
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffffff";
    let showBackbtn;
    let showProductDescription; 
    
    if (selectedId !== 0){
      console.log('selected : ' + selectedId);
      showProductDescription = <Text style={styles.itemtext}>{item.description}</Text>
      showBackbtn = <Button onPress={onPressBack} title="Back"/>
    }else{
      
    }
    
    return (
      <TouchableOpacity onPress={() => onPressItem(item)} style={[styles.item, backgroundColor]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
        <Image source={item.src} style={{ alignSelf: 'center' }} resizeMode="stretch" />
        {showProductDescription}
        <Text>{}</Text>
        <Button
          onPress={() => onPressAddToCart(item)}
          title="Add to cart"
        />
        <Text>{}</Text>
        {showBackbtn}
      </TouchableOpacity>
    );
  };

  let showCatPicker;
  if (selectedId === 0){
    showCatPicker = <PickerComp parentCallback = {callbackPickerFunction}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping" />
      <SafeAreaView style={styles.container}>
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
