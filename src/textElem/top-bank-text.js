import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default function BankTextTop() {
  return (
      <View style={styles.topPart}>
    <Text style={styles.topTitle}> Barclays bank </Text>
    <AntDesign name="up" size={19} color="#8C93A1" />
    </View>
  )
}

const styles = StyleSheet.create({

topTitle:{
fontSize:16,
fontFamily:"Inter",
fontStyle:"normal",
color:"#0C0C0E",
paddingLeft:16
},

topPart:{
flexDirection: "row",
width: "90%",
justifyContent:"space-between",
alignItems:"center",
marginBottom:29,
marginTop:28,
},
})

