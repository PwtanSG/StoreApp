import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  Dimensions,
  Text,
  View,
  SafeAreaView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

export default class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 0,
      screenHeight: 0,
      activeIndex: 0,
      carouselItems: [
        {
          title: "Fresh produce everyday",
          text: "Text 2",
          src: require('../images/fresh.png'),
        },
        {
          title: 'Vist our stores',
          text: 'Text 1',
          src: require('../images/store.png'),
        },
        {
          title: 'Free delivery',
          text: "Text 3",
          src: require('../images/freedelivery.png'),
        },
        {
          title: "Your daily needs",
          text: "Text 4",
          src: require('../images/grocery6.png'),
        },
        {
          title: "Order online beat the queue",
          text: "Text 5",
          src: require('../images/online.png'),
        },
      ]
    }
  }

  
  componentDidMount() {
    console.log("component did mount");
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })
    console.log(screenWidth)
    console.log(screenHeight)
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 0,
        marginLeft: 15,
        marginRight: 15,
      }}>
        <Text style={{ fontSize: 24 }}>{item.title}</Text>
        <Image
          source={item.src}
          style={{ width: 380, height: 220, alignSelf: 'center' }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10, }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: this.state.screenWidth-10, height:(this.state.screenHeight-140)/2 }}>
        <Carousel
            layout={"tinder"}
            layoutCardOffset={9}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>

        
        <View style={{width: this.state.screenWidth-10, height:(this.state.screenHeight-140)/2 }}>
        <Text style={{ fontSize: 24, marginLeft: 15, }}>Featured</Text>
        <Image
            source={require('../images/online.png')}
            style={{ width: 380, height: 220, alignSelf: 'center' }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </View>
     

      </SafeAreaView>

    );
  }
}