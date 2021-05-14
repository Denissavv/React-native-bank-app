
import React from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import Header from "./src/header";
import Footer from "./src/footer";
import CarouselFirst from "./src/Carousel/carousel";
import MiddleElem from "./src/body/middle-element";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import CarouseCards from "./src/Carousel/card-carousel.js/card-carousel";
import BankTextTop from "./src/textElem/top-bank-text";
import BankTextBottom from "./src/textElem/bottom-bank-text";
import MyAccaunt from "./src/textElem/my-accaunts";
import * as Svg from 'react-native-svg';



export default class App extends React.Component {

  render() {
      return (
        <SafeAreaView style={styles.container}>
<ScrollView style={styles.scrollView}> 
      <View style={styles.header}>
      <Header />
      </View>
    

          <View style={styles.body}> 
    <View style={styles.middleElem}> 
    <MyAccaunt />
    <CarouselFirst />
    </View>

    <View>
    <MiddleElem />
    <BankTextTop />
           <CarouseCards />
          <BankTextBottom />
    </View>
          </View>

       
  </ScrollView>

  
<SafeAreaView > 
              <View style={styles.footer}> 
              <Footer  />
              </View>
</SafeAreaView>           
   </SafeAreaView>
  );
}
  }


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    height:993,
    flexDirection:"column",
    backgroundColor: "#FFFFFF",
  },

scrollView:{
height:812,
},

header:{flex: 1,},

body:{flex: 8,},

middleElem:{flex:3},


});
