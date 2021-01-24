import React, { Component, useState } from 'react';
import {
    Platform, StyleSheet, TextInput, Image, Button, Text,
    TouchableOpacity, View, FlatList, SafeAreaView, Alert,
} from 'react-native';
import Header from './header';
import { PRODUCTLIST } from '../shared/productlist';



class Home extends Component {



    render() {

        const Item = ({ item, onPress, style }) => (
            <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.itemtext}>${item.price} {item.unit}</Text>
                <Image source={item.src} style={{ alignSelf: 'center' }} resizeMode="stretch" />
                <Button
                    onPress={() => Alert.alert('You clicked the button!')}
                    title="Add to cart"
                />
            </TouchableOpacity>

        );

        const renderItem = ({ item }) => {
            const backgroundColor = "#ffffff";

            return (
                <Item
                    item={item}
                    onPress={() => Alert.alert(item.name)}
                    style={{ backgroundColor }}
                />
            );
        };

        return (
            <View style={styles.container}>
                <Header title="Home" />
                <Text style={{ fontSize: 20 }}>This is the 1Home page</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={PRODUCTLIST}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>

            </View>
        )
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

export default Home
