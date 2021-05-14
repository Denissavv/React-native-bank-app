import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function MyAccaunt() {
  return (
  <View style={styles.bodyTitle}> 
    <Text style={styles.bodyTitleText}> My accaunts </Text>
  </View>
  )
}

const styles = StyleSheet.create({

bodyTitle:{
alignItems:"flex-start",
justifyContent:"center",
paddingLeft: 16,
paddingTop:10,
},
bodyTitleText:{
fontFamily:"Inter",
fontSize:24,
fontWeight:"400",
color:"#0C0C0E",
fontStyle:"normal",
paddingBottom:24

},

})