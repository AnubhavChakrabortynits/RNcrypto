import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';
import { useCallback, useMemo, useRef ,useState} from 'react';

import Chart from './components/Chart';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const ListHeader=()=>{

  
  return(
  <>

   <View style={styles.titleWrapper}>
     <Text style={styles.styleTitle}>Market
     </Text>
     </View>

     <View style={styles.divider}/>

  </>
  )
}

export default function App() {
  const bottomSheetModalRef=useRef(null);
  const snapPoints=useMemo(()=>['50%'],[])
  const [selectedCoinData,setSelectedCoinData]=useState(null)
  const openModal=(item)=>{
    setSelectedCoinData(item)
 
      bottomSheetModalRef.current.present()
  
    
  } 
  return (
 
  <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
 
    
    
    
  
  <FlatList data={SAMPLE_DATA} ListHeaderComponent={<ListHeader/>} renderItem={(item)=>{
   
    return <ListItem data={item}
    onPress={()=>openModal(item)} />
  }} />
    </SafeAreaView>
    <BottomSheetModal style={styles.bottomSheet}
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
         
        >
          <View style={styles.contentContainer}>
          {selectedCoinData ?
            <Chart 
            currentPrice={selectedCoinData.item.current_price}
            logoUrl={selectedCoinData.item.image}
            name={selectedCoinData.item.name}
            priceChangePercentage={selectedCoinData.item.price_change_percentage_24h}

            sparkLine={selectedCoinData.item.sparkline_in_7d.price}
            symbol={selectedCoinData.item.symbol}
          


            /> :null 
          }
          </View>
        </BottomSheetModal>
 
</BottomSheetModalProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

  
  },
  styleTitle:{
    fontSize:24,fontWeight:"bold",
  },
  titleWrapper:{
    marginTop:40,paddingHorizontal:15,
  
   
  },
  divider:{
    backgroundColor:"lightgrey",
    height:2,
    marginHorizontal:10,marginTop:16
  },
  bottomSheet:{
    backgroundColor:"black",
    shadowOffset:{
      width:0,
      height:-4
    },
    shadowOpacity:0.25,
    shadowRadius:4
  }
});
