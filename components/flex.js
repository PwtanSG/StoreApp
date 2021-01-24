import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.redBox}><Text>flex in components</Text></View>
                <View style={styles.blueBox}></View>
                <View style={styles.greenBox}></View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },

    redBox: {
        flex: 1,
        backgroundColor: "red"
    },

    blueBox: {
        flex: 2,
        backgroundColor: "blue"
    },

    greenBox: {
        flex: 3,
        backgroundColor: "green"
    }

});

