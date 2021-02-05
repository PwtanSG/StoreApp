import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style = {styles.text}>{title}</Text>
        </View>
        

    );
};

Header.defaultProps = {
    title: 'Daily Grocery'
}

const styles = StyleSheet.create({
    header : {
        height: 50,
        padding: 10,
        backgroundColor : '#2196F3',
    },
    text: {
        color : '#ffffff',
        fontSize: 23,
        textAlign: 'center',
    }
})

export default Header