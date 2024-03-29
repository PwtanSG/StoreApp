import * as React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { PRODUCTLIST } from '../shared/productlist';
import Carousel from 'react-native-snap-carousel';
import Header from './HeaderComponent';
import IconBadge from 'react-native-icon-badge';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: screenWidth } = Dimensions.get('window')

export default class Deals extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 0,
      screenHeight: 0,
      activeIndex: 0,
      carouselOfferItems: [],
      carouselHotItems: [],
    }
  }


  componentDidMount() {
    console.log("component did mount");
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })
    var PRODUCTOFFERLIST = PRODUCTLIST.filter((prod) => prod.label === "Offer");
    this.setState({ carouselOfferItems: PRODUCTOFFERLIST })
    var PRODUCTHOTLIST = PRODUCTLIST.filter((prod) => prod.label === "Hot");
    this.setState({ carouselHotItems: PRODUCTHOTLIST })
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 250,
        padding: 0,
        marginLeft: 15,
        marginRight: 15,
      }}>

        <ImageBackground
          source={item.src}
          style={{
            height: 250,
            width: 380,
            position: 'relative',
            top: 2,
            left: 2
          }}
        >
          <Icon name="chevron-left" size={38} color="#808080"
            style={{ position: 'absolute', bottom: 125, left: 0 }}
          />
          <Icon name="chevron-right" size={38} color="#808080"
            style={{ position: 'absolute', bottom: 125, left: 350 }}
          />
        </ImageBackground>
        <Text style={{ fontSize: 16, alignSelf: 'center', position: 'absolute', bottom: 20, left: 100 }}>{item.name} ${item.price} {item.unit}</Text>
      </View>

    )
  }

  _renderItemP({ item, index }) {
    return (
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 250,
        padding: 0,
        marginLeft: 10,
        marginRight: 10,
      }}>

        <ImageBackground
          source={item.src}
          style={{
            height: 250,
            width: 380,
            position: 'relative',
            top: 2,
            left: 2
          }}
        >
          <Icon name="chevron-left" size={38} color="#808080"
            style={{ position: 'absolute', bottom: 125, left: 0 }}
          />
          <Icon name="chevron-right" size={38} color="#808080"
            style={{ position: 'absolute', bottom: 125, left: 350 }}
          />
        </ImageBackground>
        <Text style={{ fontSize: 16, alignSelf: 'center', position: 'absolute', bottom: 20, left: 100 }}>{item.name} ${item.price} {item.unit}</Text>
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 0, }}>
        <Header title="Hot Deals" />

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ width: this.state.screenWidth - 10, height: (this.state.screenHeight - 150) / 2 }}>
            <Text style={{ fontSize: 24, paddingLeft: 10, fontWeight: 'bold' }}>Hot ({this.state.carouselHotItems.length})</Text>
            <Carousel
              layout={"default"}
              layoutCardOffset={9}
              ref={ref => this.carousel = ref}
              data={this.state.carouselHotItems}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
          </View>
          <Text></Text>
          <View style={{ width: this.state.screenWidth - 10, height: (this.state.screenHeight - 150) / 2 }}>
            <Text style={{ fontSize: 24, paddingLeft: 10, fontWeight: 'bold' }}>Offer ({this.state.carouselOfferItems.length})</Text>
            <Carousel
              layout={"default"}
              layoutCardOffset={9}
              ref={ref => this.carousel = ref}
              data={this.state.carouselOfferItems}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              renderItem={this._renderItemP}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
          </View>


        </View>


      </SafeAreaView>

    );
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
    fontWeight: 'bold'
  },

  itemtext: {
    fontSize: 18,
  },
});