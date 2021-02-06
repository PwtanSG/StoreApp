

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosenIndex: 0
        };
        this.sendBackData = this.sendBackData.bind(this);
        this.Update = this.Update.bind(this);
    }

    sendBackData = () => {
        this.props.parentCallback(this.state.choosenIndex);
        //Alert.alert('selected');
    }

    Update = (itemValue, itemPosition) =>{
        this.setState({ itemsel: itemValue, choosenIndex: itemPosition })
        //this.setState({ choosenIndex: itemPosition })
        //console.log("this")
        this.props.parentCallback(itemValue);
    }
        
    /*
    onValueChange={(itemValue, itemPosition) =>
        this.setState({ itemsel: itemValue, choosenIndex: itemPosition })}
    */

    render() {
        return (
            <View style={styles.container}>
                <Picker style={styles.pickerStyle}
                    selectedValue={this.state.itemsel}
                    onValueChange={this.Update}
                >
                    <Picker.Item label="Category - All" value="1" />
                    <Picker.Item label="Category - Fruits" value="2" />
                    <Picker.Item label="Category - Vegetables" value="3" />
                    <Picker.Item label="Category - Meat" value="4" />
                    <Picker.Item label="Category - Seafood" value="5" />
                    <Picker.Item label="Category - Beverages" value="6" />

                </Picker>      
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        margin: 5,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pickerStyle: {
        height: 60,
        width: "85%",
        color: '#344953',
        justifyContent: 'center',
        borderColor: 'black',
        fontSize: 24
    }
})  
