
import { StyleSheet ,Text, View, StatusBar,ImageBackground, Dimensions,ListView, ScrollView, SafeAreaView} from 'react-native';
import { useState } from "react";
import{KeyboardAwareScrollView} from 'react-native';
import SearchBAr from './components/SearchBar';
import Weather from './components/Weather';
import { useRoute } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import{NavigationContainer} from '@react-navigation/native'
import App from './App';

const MyMain = (props) => {

    const [savedName,setSavedName]=useState('');
    const [mybackImag,setBackImage]=useState('');
    const [unit,setUnit]=useState('metric');
    const [getData,setData]=useState('');
    const [getaddedCity,setAddedCity]=useState('');
    const [getSize,setSize]=useState('');
    const [getUpdated,setUpdated]=useState('');
    
    
    const route = useRoute();

    
    
handleData=(data)=>
{
  setData(data);
}

handleCity=(mycityName)=>{
  //console.log(mycityName);
  setSavedName(mycityName);
}
backgroundHandler=(background)=>{
  //console.log(background);
  setBackImage(background);

}
handleUnit=(myUnit)=>{
  setUnit(myUnit);
}
handleAddition=(city_name)=>
{
  setAddedCity(city_name);
}
handleSize=(size)=>{
  setSize(size);
}
handleUpdate=(updated)=>{
  setUpdated(updated);

}
handleSending=(sed)=>{

};
handleUnit=(un)=>{
  console.log(un);
}
handleChangeOfScreen=()=>{
  
  props.navigation.navigate('Search',{mybackImag:mybackImag});
}
    return ( 
        <View>
        
        <ImageBackground style={styles.container}  resizeMode='cover' source={mybackImag} blurRadius={40} >

            
        <SafeAreaView style={{backgroundColor:mybackImag}}>
        <StatusBar barStyle="default"/>
        <View style={styles.container}>
        

        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={false}>
        
        
        <Weather  myNav={handleChangeOfScreen} myUpdate={getUpdated} size={handleSize} mycityName={route.params.getCity} background={backgroundHandler} selectedUnit={route.params.tmepType} myData={handleData} myData2={handleData} added={handleAddition}/>
        </ScrollView>

        </View>
        </SafeAreaView>
        </ImageBackground>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      //width: Dimensions.get('screen').width,
      //height: Dimensions.get('screen').height,
    },
    myBackground:{
      //flex:1,
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    }
  });
 
export default MyMain;