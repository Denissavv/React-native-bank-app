  import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 


export default class CarouselFirst extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
         
          {
        title:"re: Store",
        text: "Electronics",
        url:"https://atlas.meduza.io/image/attachments/images/001/837/663/large/plglGuyJyJeXNxXYoSH-7g.jpg",
        id:1,
          },
          {
        title:"Macdonalds",
        text: "Food",
        url:"https://s3-alpha-sig.figma.com/img/27fc/4e00/6f23af09bffcd2036d408f3d4b870b64?Expires=1621814400&Signature=bSg2aOYGmUdyzic9YgNouLcaNLq0-Gwr2dtTEQLE~hGmjrKeDgOJ5bAJZTlv-IEEki5chu0oEt5uxhz6ZeNsdLlbjGNyksxV6be41bj1lNXKtzTql8rQGQP2C24kjeyWNSwUVCDJ5P~IJhw8pVD15kBW6WKfee4BwVvVffoR7x1PF9~KKjaL11UMhJrEPXHJtlfdAsbChcJxdghaa~wqj52l7GCnlB9uYLsB5ym9U7iJzaTuh7koq7gcPwKOxQPk1Yizh-pDHkV0imn2jsh-Zd2xyUHnZ4HN7Z-6~-DHRD~ak599LR229MPfJLmx-avThETzCjmEZQohJHKLL558fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        id:2,
          },
         
        ]
      }
    }

    _renderItem({item,index}){
        return (

<View style={styles.container}>


    <ImageBackground 
    style={styles.image} 
    source ={{url:item.url}}>
    <View style={styles.topIcons}>
         <View style={styles.leftLike}> 
          <View style={styles.roundLike}>
          <AntDesign name="hearto" size={19} color="white" />
          </View>
          </View>

          <View style={styles.rightClose}> 
          <View style={styles.roundClose}>
          <AntDesign name="close" size={20} color="white" />
          </View>
          </View>
          </View>

    </ImageBackground>
 


      <View style={styles.bottomInfo}>
      <View style={styles.textBox}> 
      <Text style={styles.titleStyle}>{item.title} </Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>

 

    <View style={styles.discountBox}>
    <LinearGradient 
     colors={['#A384F3', '#94DDF4']}
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
    style={styles.discountLogo}>
    <Text 
    style={styles.discountText} >15%</Text>
    </LinearGradient>
    </View>
    </View>


  </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={styles.slider}>

            <View style={styles.courouselAnimated}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
container: {
backgroundColor:'white',
borderRadius: 6,
height: 241,
width:301,
padding: 50,
marginLeft: 25,
marginRight: 25,
justifyContent:"center",
alignItems:"center",
  shadowColor:"rgba(0, 0, 0, 0.06)",
shadowOpacity:0.9,
shadowRadius: 20,
elevation:7,
shadowOffset: {
	width: 0,
	height: 0,
},

},

image:{
  width:285,
  height:159,
  borderRadius:30,
  shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 1,

},

textBox:{
paddingLeft:10,
paddingTop:10,
alignItems:"flex-start",
justifyContent:"flex-start",
},

topIcons:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
width:280,
position:'relative',
paddingTop:10,
},



roundClose:{
backgroundColor: "rgba(0, 0, 0, 0.2)",
height: 36,
width: 36,
borderRadius: 40,
justifyContent: 'center',
alignItems: 'center',

},


roundLike:{
backgroundColor: "rgba(0, 0, 0, 0.2)",
height: 36,
width: 36,
borderRadius: 40,
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,
marginRight: 10,
},

courouselAnimated:{
   flex: 1, 
  flexDirection:'row', 
  justifyContent: 'center'
  },

titleStyle:{
  fontSize: 24,
 fontFamily:"Inter",
 fontWeight:"600",
 color:"#0C0C0E",
 fontStyle:"normal",

},

discountBox:{
paddingTop:16,
marginRight:24,
justifyContent:"flex-start",

},

discountText:{
color:"white", 
fontSize:14, 
fontFamily:"Inter",
style:"normal",
},

discountLogo:{
height: 22,
width: 44,
borderRadius: 10,
justifyContent:"center",
alignItems:"center",
marginLeft:60,
marginRight:10,
},

slider:{
  flex:1,
flexDirection: 'column',
justifyContent:"space-between",
alignItems: "center",
backgroundColor:'white', 
paddingTop: 15,
},

text:{
justifyContent:"flex-start",
alignItems:"flex-start",
fontSize:14,
fontStyle:"normal",
color:"#8C93A1",
fontWeight:"500",
fontFamily:"Inter",


},
bottomInfo:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"flex-start",
}

})



