import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default function BankTextBottom() {
  return (
     <View style={styles.bottomPart}>
    <Text style={styles.bottomTitle}> Barclays bank </Text>
    <View style={styles.pointer}>
    <AntDesign  name="down" size={19} color="#8C93A1" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
bottomTitle:{
fontSize:16,
fontFamily:"Inter",
fontStyle:"normal",
color:"#0C0C0E",
paddingLeft:16,
},

bottomPart:{
flexDirection: "row",
width: "90%",
justifyContent:"space-between",
alignItems:"center",
marginTop:37,
marginBottom:12,
},

pointer:{
paddingTop:30,
},
})