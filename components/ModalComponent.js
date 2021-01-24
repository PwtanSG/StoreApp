import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
    setTimeout(() => {
      this.setState({
        modalVisible: false,
      });
    }, 3000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',

              justifyContent: 'center',
              margin: 25,
            }}>
            <Text style={{fontSize: 16, color: 'white', backgroundColor: 'black'}}>
                {}
              Added to Cart!
            </Text>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.showModal();
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalScreen;