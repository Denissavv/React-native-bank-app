import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StyleProp,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import Visa from '../../image/visa';
import Mastercard from '../../image/mastercard';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Rect } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

export default class CarouseCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          id: 1,
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <SafeAreaView style ={{
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"flex-end",
        marginLeft:110,
        marginBottom:20,
}}>

<View style={styles.leftElemShadow}>
        <LinearGradient
          colors={['#1E1E1E', '#575757']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.containerLeft}>
          <View style={styles.logoContainer}>
            <Visa />
          </View>

          <View style={styles.bottomInfo}>
            <View style={styles.textBin}>
              <Text style={styles.moneyStile}>$84,000.54 </Text>
              <Text style={styles.bankStile}>Tinkoff Black</Text>
            </View>

            <View style={styles.fullBin}>
              <View style={styles.roundBin}>
                <Feather name="trash-2" size={20} color="#FFFFFF" />
              </View>
            </View>
          </View>
        </LinearGradient>
    </View>
      
      <View style={styles.rightElemShadow}>
        <LinearGradient
          colors={['#6A89FD', '#50A2FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.containerRight}>
          <View style={styles.logoContainer}>
            <Mastercard />
          </View>

          <View style={styles.bottomInfo}>
            <View style={styles.textBin}>
              <Text style={styles.moneyStile}>$125,000</Text>
              <Text style={styles.bankStile}>Tinkoff Black</Text>
            </View>

            <View style={styles.fullBin}>
              <View style={styles.roundBin}>
                <Feather name="trash-2" size={20} color="#FFFFFF" />
              </View>
            </View>
          </View>
        </LinearGradient>
        </View>


      </SafeAreaView>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.renderArea}>

        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={195}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerLeft: {
    flexDirection: 'column',
    backgroundColor: '#50A2FF',
    height: 278,
    width: 195,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginRight:110,

 },
 
 leftElemShadow:{
shadowColor: "rgba(0, 0, 0, 0.3)",
shadowOffset: {
	width: 0,
	height: 15,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
 },


  containerRight:{
    flexDirection: 'column',
    backgroundColor: '#50A2FF',
    height: 278,
    width: 195,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft:210,
  },

  rightElemShadow:{
shadowColor: "rgba(106, 137, 253, 0.3)",
shadowOffset: {
	width: 0,
	height: 15,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },

  logoContainer: {
    flex: 1,
    width: 10,
    height: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
  },


  moneyStile: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 20,
    fontWeight: '700',
    color: 'white',
  },

  bankStile: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 12,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: 12,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 0.5)',
  },

  textBin: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  roundBin: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 44,
    width: 44,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  fullBin: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    paddingRight: 130,
    paddingBottom: 16,
  },

  bottomInfo: {
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  renderArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
