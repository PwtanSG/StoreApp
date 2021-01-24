
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
import Header from './header';
import { PRODUCTLIST } from '../shared/productlist';

const onPressAddToCart = (item) => {
  console.log(item.id)
  Alert.alert('Add to cart button! item ' + item.id + "here" )
}

const Item = ({ item, onPress, style }) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
    <Image source={item.src} style={{ alignSelf: 'center' }} resizeMode="stretch" />
    <Button
          onPress={()=> onPressAddToCart(item) }
          title="Add to cart"
        />
  </TouchableOpacity>

);


const Products = () => {

  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(0);

    const onPressItem = (item) => {
      console.log(item.id)
      Alert.alert('You clicked the item ' + item.id + "here" )
    }

    const onPressAddToCart = (item) => {
      console.log(item.id)
      Alert.alert('Add to cart button! item ' + item.id + "here" )
    }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffffff";

    return (
      <Item
        item={item}
        onPress={() => onPressItem(item)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping Cart 1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={PRODUCTLIST}
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
