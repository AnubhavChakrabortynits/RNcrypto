import React from 'react'
import { View,Text,Dimensions } from 'react-native'
import { StyleSheet,Image } from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation,ChartYLabel} from '@rainbow-me/animated-charts';


export const {width: SIZE} = Dimensions.get('window');

export default function Chart(props) {
 
  const formatUSD=(value)=>{
    console.log(value)
    'worklet';
    if(value==""){
      return `$ ${props.currentPrice.toLocaleString('en-US',{currency:'USD'})}`
    }
    

    const formattedValue=`$ ${parseFloat(value).toFixed(2)}`
      return formattedValue ;
    
  }

    const priceChangeColor=props.priceChangePercentage>0?"green":"red"
  return (
    <ChartPathProvider data={{ points:props.sparkLine, smoothingStrategy: 'bezier' }}>
    <View style={styles.chartWrapper}>
    <View style={styles.titleWrapper}>
        
<View style={styles.upperTitle}>
<View style={styles.upperLeftTitle}>
<Image source={{uri:props.logoUrl}} style={styles.image}/>
<Text style={styles.subtitle}>{props.name} {props.symbol}</Text>

</View>

<Text style={styles.subtitle}>7d</Text>
</View>

<View style={styles.lowerTitles}>
<ChartYLabel
format={formatUSD} style={styles.boldtitle}/>
<Text style={styles.boldtitle}>${props.currentPrice}</Text>
<Text style={[styles.title,{color:priceChangeColor}]}>{props.priceChangePercentage?.toFixed(2)}%</Text>
</View> 


    </View>

<View style={{marginTop:30}}>
    <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
      <ChartDot style={{ backgroundColor: 'black' }} />
</View>
    </View>

    </ChartPathProvider>
  )
}

const styles=StyleSheet.create({
chartWrapper:{
  marginVertical:16
},
titleWrapper:{
marginHorizontal:16
},
upperTitle:{
  flexDirection:"row",justifyContent:"space-between",
  alignItems:"center"
},
lowerTitles:{
  flexDirection:"row",justifyContent:"space-between",
  alignItems:"center"
},
upperLeftTitle:{
flexDirection:"row",alignItems:"center"
},image:{
  width:24,height:24,
  marginRight:4
},
subtitle:{
  fontSize:14,
  color:"#A9ABB1"
},
boldtitle:{
  fontSize:24,
  fontWeight:"bold"
},
title:{
  fontSize:18
}

})