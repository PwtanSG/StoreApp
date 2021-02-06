import React, { Component } from 'react';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
//import { Avatar, ListItem } from 'react-native-elements';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    menuitem: 'Notifications',
                },
                {
                    id: 1,
                    menuitem: 'Privacy',
                },
                {
                    id: 2,
                    menuitem: 'Personal Details',
                },
            ]
        }

        this.sendLogoutBackToParentData = this.sendLogoutBackToParentData.bind(this);
    }

    sendLogoutBackToParentData = () => {
        console.log("send back logout")
        this.props.LogoutParentCallback("logout");
    }

    goToMenuItem = (item) => {
        //alert(item.menuitem)
        if (item.id === 0){
            this.props.navigation.navigate("NotificationSettings")
        }
        if (item.id === 1){
            this.props.navigation.navigate("PrivacySettings")
        }
    }

    render() {
        return (
            <View style={styles.container1}>
                <Text></Text>
                <Image
                    source={require('../images/profile-pix.png')}
                    style={{ width: 160, height: 160, alignSelf: 'center' }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text style={styles.username}>{this.props.loginname}</Text>
                <Text></Text>
                {this.state.menu.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.container}
                        onPress={() => this.goToMenuItem(item)}>
                        <Text style={styles.text}>
                            {item.menuitem}
                        </Text>
                    </TouchableOpacity>
                ))
                }
                <Text></Text>
                <Button title="Logout" color="#0A5FDC" onPress={() => this.sendLogoutBackToParentData()} />
                <Text></Text>
            </View>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    container1: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 23,
        backgroundColor: '#fff',

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
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
     },
     text: {
        fontSize: 22,
        paddingTop: 10,
        paddingLeft: 10,
        color: '#344953'
     }
})