import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';



import { Card } from 'react-native-paper';

export default function MiddleElem() {
  return (
<SafeAreaView style = {styles.container}>
<View style ={styles.head}>
<View style = {styles.money}>
<Text style ={styles.spendingLeft}> Spendings </Text>
<Text style={styles.moneyAccaunt}> $ 137,000 </Text> 
</View>

<View style = {styles.months}>
<AntDesign name="left" size={19} color="#8C93A1" />
<Text style ={styles.monthsName}> January </Text>
<AntDesign name="right" size={19} color="#8C93A1" />
</View>


</View>
</SafeAreaView>
  )
}

const styles= StyleSheet.create({

container:{
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
alignSelf:"center",
shadowColor:"#E5E5E5",
shadowOpacity:1.1,
shadowRadius: 30,
elevation:8,
shadowOffset: {
	width: 0,
	height: 15,
},



},

head:{
alignItems: "flex-start",
justifyContent: "fles.",
paddingTop: 14,

},

  money:{
flexDirection: "row",
height: 51,
width: 343,
borderTopLeftRadius:6,
borderTopRightRadius:6,
borderBottomRightRadius:0,
borderBottomLeftRadius:0,
shadowColor:"#E5E5E5",
borderStyle:'solid',
backgroundColor: "#FFFFFF",
justifyContent:"space-between",
padding:2,
alignItems:"center",
},

months:{
flexDirection: "row",
height: 51,
width: 343,
borderTopLeftRadius:0,
borderTopRightRadius:0,
borderBottomRightRadius:6,
borderBottomLeftRadius:6,
backgroundColor: "#F8F8F8",
justifyContent:"space-between",
alignItems:"center",

},

monthsName:{
color:"#0C0C0E",
style:"normal",
fontSize: 16,
lineHeight:19.36,
fontFamily:"Inter",
fontWeight:"500",
},

moneyAccaunt:{
fontFamily:"Inter",
fontStyle:"normal",
fontSize:16,
fontWeight:"600",
lineHeight:19,
color:"#0C0C0E",
},



spendingLeft:{
color:"#5685FD",
fontFamily:"Inter",
fontStyle:"normal",
fontSize:14,
fontWeight:"500",
lineHeight:19,
},

})