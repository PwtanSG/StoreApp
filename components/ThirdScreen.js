import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ThirdScreen extends Component {
     render(){
        return(
            <View>
		   <Text style={{fontSize:20}}>This is the Firstscrren page</Text>
                <Button title="Second" onPress={()=>    
                        this.props.navigation.navigate("SecondScreen")} />
            </View>
      )
    }
}


export default ThirdScreen;
