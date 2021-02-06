import React, { Component } from 'react'
import { StyleSheet, Switch, View, Text, Dimensions } from 'react-native'

export default class NotificationSettings extends Component {
    state = {
        switchValue: false
    };

    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.textStyle}>Email Notification</Text>
                <Switch
                        value={this.state.switchValue}
                        onValueChange={(switchValue) => this.setState({ switchValue })} />
                <Text style={styles.textStyle}>{this.state.switchValue ? 'on' : 'off'}</Text>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle: {
        margin: 24,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#344953'
    }
})  