import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';
import FooterImage from "../image/footer-image";






export default function Footer() {
  return (
    <View style={styles.bottomBarTextContainer}> 
   
<SafeAreaView>
<View style ={styles.head}>

<View style = {styles.bottomItems}>
<AntDesign name="appstore-o" size={26} color="#C9CED7" />


<View style={styles.centered}>

<FooterImage />

<Text style={styles.textBottom}> Accounts </Text>
</View>

<Ionicons name="person-outline" size={26} color="#8C93A1" />
</View>
</View>
</SafeAreaView>
    </View>
    
  )
}

const styles= StyleSheet.create({
head:{
alignItems: "center",
justifyContent: "center",
},

  centered:{
  alignItems:"center",
  justifyContent:"center"
  },

bottomBarTextContainer:{
  justifyContent:"center",
  alignItems:"centere",
  width:"100%",
  shadowColor:"rgba(0, 0, 0, 0.06)",
shadowOpacity:0.9,
shadowRadius: 20,
elevation:7,
shadowOffset: {
	width: 0,
	height: 0,
},

},



 textBottom:{
fontSize:12,
fontFamily:"inter",
fontWeight:"500",
color:"#0C0C0E",
  },

bottomItems:{
  flexDirection: "row",
  height: 64,
  width:"100%",
  shadowColor:"rgba(0, 0, 0, 0.06)",
  backgroundColor: "#FFFFFF",
  justifyContent:"space-between",
  alignItems:"center",
  borderStyle:'solid',
  paddingLeft:30,
  paddingRight:110,
},
})