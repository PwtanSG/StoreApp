import React, { Component } from 'react';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
//import { Avatar, ListItem } from 'react-native-elements';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.sendLogoutBackToParentData = this.sendLogoutBackToParentData.bind(this);
    }

    sendLogoutBackToParentData = () => {
        console.log("send back logout")
        this.props.LogoutParentCallback("logout");
    }

    onLogout = () => {
        console.log("logout")
        //this.props.navigation.navigate("SecondScreen")
        //this.props.navigation.navigate("SecondScreen")
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/avatar.png')}
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={styles.username}>Hi {this.props.loginname}!</Text>
                <Text style={styles.username}>{ }</Text>
                <Text style={styles.menutext}
                    onPress={() => this.props.navigation.navigate("NotificationSettings")}>
                    Notifications</Text>
                <Text style={styles.menutext}
                    onPress={() => this.props.navigation.navigate("PrivacySettings")}>
                    Privacy</Text>
                <Text style={styles.menutext}>Log out</Text>
                <Text style={styles.username}>{ }</Text>
                <Button title="Logout" color="#0A5FDC" onPress={() => this.sendLogoutBackToParentData()} />

            </View>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 23,

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
    },
    username: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#344953'
    },

    menutext: {
        fontSize: 24,
        paddingTop: 10,
        paddingLeft: 10,
        color: '#344953'
    },
})