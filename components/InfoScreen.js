import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';

class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/icon_tran_200x200.png')}
          style={{ width: 160, height: 160, alignSelf: 'center', padding: 20}}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Text style={styles.title}>Store locations</Text>
        <Text style={styles.itemtext}>Nex Shopping Mall #01-01</Text>
        <Text style={styles.itemtext}>Tanjong Pagar Plaza #01-01</Text>
        <Text style={styles.title}>Opening hours</Text>
        <Text style={styles.itemtext}>Mon - Fri : 7am - 11pm </Text>
        <Text style={styles.itemtext}>Sat - Sun: 6am - 12am</Text>
        <Text style={styles.title}>Customer Service</Text>
        <Text style={styles.itemtext}>Tel : 6789 0001</Text>
        <Text style={styles.itemtext}>email : service@dailygrocery.com</Text>
      </View>
    )
  }
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
    fontWeight: 'bold',
    alignSelf: 'center',
    padding : 15
  },

  itemtext: {
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default InfoScreen;

