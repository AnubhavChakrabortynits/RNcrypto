import React from 'react'

import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
export default function ListItem(props) {

    const priceChangeColor=props.data.item.price_change_percentage_24h>0?"green":"red"
  return (
    <TouchableOpacity onPress={props.onPress}>
  <View style={styles.itemWrapper}>

<View style={styles.leftWrapper}>
    <Image style={styles.image} source={{uri:props.data.item.image}} />
    <View style={styles.titleWrapper}>
        <Text style={styles.title}>{props.data.item.name}</Text>
        <Text style={styles.subtitle}>{props.data.item.symbol?.toUpperCase()}</Text>
    </View>


  </View>




  <View style={styles.rightWrapper}>
 
        <Text style={styles.title}>{props.data.item.current_price?.toLocaleString('en-US',{currency:'USD'})}$</Text>
        <Text style={[styles.subtitle,{color:priceChangeColor}]}>{props.data.item.price_change_percentage_24h?.toFixed(4)}%</Text>
    </View>

  </View>

 
  </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    itemWrapper:{
flexDirection:"row",
paddingHorizontal:16,
marginTop:24,
justifyContent:"space-between",
alignItems:"center"
    },
    image:{
width:50,height:50
    },
    leftWrapper:{
flexDirection:"row",
alignItems:"center"
    },
    rightWrapper:{
alignItems:"flex-end"
    },
    title:{
fontSize:18
    },
    subtitle:{
fontSize:14,
color:"dimgrey",marginTop:4
    }
,
titleWrapper:{
    marginLeft:8
}
})