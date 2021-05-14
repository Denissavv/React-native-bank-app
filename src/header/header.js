import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



function Header() {
  return (
    <SafeAreaView
      style={styles.container}>
      <View style={styles.head}>
        <View style={styles.money}>
          <AntDesign name="clockcircleo" size={15} color="#0C0C0E" />
          <Text style={styles.leftPartMoney}> $ 1,340.10</Text>
        </View>
      </View>

      <View
        style={styles.rightPartContainer}>
        <Text style={styles.rightPartText}>Add bank</Text>
        <LinearGradient
          colors={['#A384F3', '#94DDF4']}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={styles.roundAddBank}>
          <AntDesign name="plus" size={20} color="white" />
        </LinearGradient>
        <View
          style={{paddingRight:15}}>
          <Text style={styles.roundedRightNumber}>2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{
  flexDirection: 'row',
  justifyContent: 'space-between',
},

rightPartContainer:{
flexDirection: 'row',
alignItems: 'center',
},

roundAddBank:{
height: 50,
width: 50,
borderRadius: 24,
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,
marginRight: 10,
},

rightPartText:{
fontFamily:"Inter",
color:"#0C0C0E",
fontSize:12,
lineHeight:14.52,
fontWeight:"500",
fontStyle:"normal",
},

roundedRightNumber:{
fontSize:11,
fontFamily:"Inter",
color:"#8C93A2",
borderWidth:1.5,
width:20,
height:20,
borderRadius:20/2,
borderStyle:"solid",
borderColor: "#8C93A2",
paddingLeft:5,
paddingTop:1
},

  money: {
flexDirection: 'row',
height: 33,
width: 112,
borderRadius: 30,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
shadowColor:"rgba(0, 0, 0, 0.08)",
shadowOpacity:0.8,
shadowRadius: 30,
elevation:1,
shadowOffset: {
	width: 0,
	height: 5,
},


  },

  leftPartMoney:{
fontFamily:"Inter",
fontSize:14,
fontStyle:"normal",
fontWeight:"500",
  },
  head: {
alignItems: 'center',
justifyContent: 'center',
paddingLeft: 16,
  },
});

export default Header;
